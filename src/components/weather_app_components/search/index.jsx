import '../../../output.css'

export default function Search({city, setCity, handleSubmit}){
    return <div className='h-48 flex flex-col bg-cyan-800 justify-end'>
        <div className='flex justify-center self-center bg-cyan-800 w-screen' >
            <input 
            className='w-3/4 h-12 rounded-lg text-2xl self-center p-2 m-2'
            type='text'
            name="city_name"
            value={city}
            placeholder='Enter your city name'
            onChange={(event) => setCity(event.target.value)}
            />
            <button className='rounded-full bg-teal-500 text-2xl h-12 w-32 self-center' onClick={() => handleSubmit()}>Search</button>
        </div>
    </div>
}