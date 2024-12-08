import { useContext } from 'react'
import '../../../output.css'
import { Usercontext } from '../outside_clicker'


export default function CityList({searchData, setSearchData, setCity, setSelected, setLocation}){

    function handleDropDownclick(obj){
        setSearchData([])
        setCity(obj.name)
        setSelected(true)
    }

    const focussed = useContext(Usercontext)

    return <ul className='flex flex-col justify-start w-screen h-20 bg-cyan-800 text-xl'>  
    {
        searchData && focussed? 
        searchData.map((objs, idx) => {
            return <li className='flex self-center w-[1565px] cursor-pointer bg-amber-200' onClick={() => handleDropDownclick(objs)} >{objs.name}, {objs.state}, {objs.country}</li>
        } )
        : null
    }
    </ul>
}