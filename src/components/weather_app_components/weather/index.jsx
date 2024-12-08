import Search from '../search'
import '../../../output.css'
import {  useEffect, useState } from 'react'
import CityList from '../city_list';
import OutsideInsideClicker from '../outside_clicker';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

export default function Weather(){
    const [loadingText, setLoadingText] = useState('Loading, please wait')
    const [displayData, setDisplayData] = useState(null);
    const [city, setCity] = useState('Bengaluru');
    const [location, setLocation] = useState({name: 'Bengaluru', state: 'karnataka', country: 'IN'});
    const [selected, setSelected] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialFetch, setInitialFetch] = useState(false);
    const limit=3
    let timer;
    const API_Key = '40722dbfb21399c08dcf01d9e7bc015c'
    let submitDebouncer;
    let submitAborter = null;


    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function fetcher(){
        if(submitAborter) submitAborter.abort();

        submitAborter = new AbortController();
        const signal = submitAborter.signal;
    
        setLoading(true)
        startProcesses();
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_Key}`, {signal})
        .then((response) => {

            if(response.ok) return response.json();
            else throw Error("Response is not OK");
        })
        .then((dataCity) => {
            if(dataCity.length > 0){
                const lat = dataCity[0].lat;
                const lon = dataCity[0].lon;
                setLocation(dataCity[0])
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;
                return fetch(url, {signal});
            }
            else{
                setLoading(false);
                endProcesses();
                submitAborter = null;
                setError(Error("City not found! Please check spelling of your city, and try again!"));
                throw(Error("City not found! Please check spelling of your city, and try again!"));
            }
        })
        .then((response) => {
            if(response.ok) return response.json();
            else throw Error("Second API response not OK")
        })
        .then((data) => {
            setLoading(false)
            endProcesses();
            setDisplayData(data)
        })
        .catch((error) => {
            console.log("Some error occured" + error.message);
            setError(error);
            setLoading(false);
            endProcesses();
        })
    }

    function handleSubmit(){
        if(submitDebouncer){
            clearTimeout(submitDebouncer);
            setLoading(false)
        }
        setLoading(true)
        submitDebouncer = setTimeout(async () => {
            fetcher()
        }, 250)
    }

    function startProcesses(){
        const textArray = ['Loading, please wait', 'Loading, please wait .', 'Loading, please wait ..', 'Loading, please wait ...'];
        let i = -1;
        timer = setInterval(() => {
            i = (i+1)%4;
            setLoadingText(textArray[i]);
        }, 750);
    }
    function endProcesses(){
        clearInterval(timer)
    }

    useEffect(() => {
        setSelected(false)                          // To specify that new input is given, city is not finalized
        const controller = new AbortController();   // Used to abort the fetch request 
        const cityName = setTimeout(async () => {   // Debouncer, if input is typed in speed, only final input to fetch (300ms), nothing else
            setSearchData([])
            const signal = controller.signal;
            if(city !== "" && !selected){
                try{
                    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_Key}`, { signal });
                    const data = await response.json();
                    setSearchData(data);
                } catch(e){
                    if (e.name === 'AbortError'){
                        setSearchData([])
                    }
                    else{

                        console.log("Some Error Occured : " + e.message)
                    }
                }
            }
            else{
                setSearchData([])
            }
        }, 300)

        return () => {                              // cleanup function
            if(controller) controller.abort();
            clearTimeout(cityName);
        }

    }, [city])

    if(!initialFetch) {
        handleSubmit();
        setInitialFetch(true);
    }


    return <div className='flex flex-col bg-blue-200 w-screen h-screen'>

        <OutsideInsideClicker>
            <Search city={city} setCity={setCity} handleSubmit={() => handleSubmit()} />
            <CityList searchData={searchData} setSearchData={setSearchData} setCity={setCity} setSelected={setSelected} setLocation={setLocation} />
        </OutsideInsideClicker>
        {
            loading?<div className='flex flex-col justify-center w-screen grow bg-red-300 '>
                    <div className='self-center text-5xl'>
                        {loadingText}
                    </div>
                </div>:
            <div className='flex justify-center grow w-screen bg-white'>
                <div className='justify-center w-4/6 bg-red-800'>
                    {
                        displayData?
                        <div className='flex flex-col bg-white'>
                            <div className='flex justify-center bg-red-200 h-48'>
                                <div className=' w-min h-min self-center'>
                                    {
                                        displayData?displayData.weather[0].icon[2] === 'n'?
                                        <WeatherIcon iconId={displayData.weather[0].id} name="owm" className='text-9xl scale-100' night />:
                                        <WeatherIcon iconId={displayData.weather[0].id} name="owm" className='text-9xl scale-100' />:
                                        null
                                    }
                                </div>
                            </div>
                            <div className='flex justify-center font-bold'>{location.name}, {location.state}, {location.country}</div>
                            <div className='flex justify-center'>Today | {new Date().toDateString()}</div>
                            <div className='flex flex-col justify-center bg-black h-full w-full'>
                                <div className='flex justify-center font-bold text-xl bg-white self-start w-full'>Temp: {(displayData.main.temp - 273).toPrecision(3)} °C | min temp. : {(displayData.main.temp_min - 273).toPrecision(3)} °C | max temp : {(displayData.main.temp_max - 273).toPrecision(3)} °C</div>
                                <div className='flex justify-center font-bold text-xl bg-white self-start w-full'>{displayData.weather[0].description} | Humidity : {displayData.main.humidity}% </div>
                            </div>
                            <div className='w-full h-48 bg-white flex'>
                                <div className='flex justify-center w-full h-full bg-pink-700'>
                                </div>
                                <div className='flex justify-center w-full h-full bg-fuchsia-700'>
                                </div>
                            </div>
                        </div>:null
                    }
                </div>
            </div>
        }
    </div>
}
