import { useState } from "react";
import data from './data'
import '../../../output.css'

export default function Accordian(){
    const [currentId, setCurrentId] = useState(Array(4).fill(0))
    const [multipleSelection, setMultipleSelection] = useState(true)
    const [mulIndex, setMulIndex] = useState(1)
    const displayText = [
        "enable multiple selection",
        "disable multiple selection"
    ]
    function allowMultipleSelection(){
        let tempIndex = (mulIndex+1) % 2
        let dup = Array(4).fill(0)
        if(multipleSelection){
            setMultipleSelection(false)
        }
        else{
            setMultipleSelection(true)
        }
        setCurrentId(dup)
        setMulIndex(tempIndex)
    }

    function handleClick(did){
        did = parseInt(did)
        let dup = currentId.slice()
        if (currentId[did] === 0){
            dup[did] = 1
            if(!multipleSelection){
                for(let j=0; j<dup.length; j++){
                    if(j !== did){
                        dup[j] = 0
                    }
                }
            }
            setCurrentId(dup);
        }
        else {
            dup[did] = 0
            if(!multipleSelection){
                for(let j=0; j<dup.length; j++){
                    if(j !== did){
                        dup[j] = 0
                    }
                }
            }
            setCurrentId(dup);
        }
    }
    return <div className="flex bg-red-900 justify-center text-white text-xl h-screen w-screen">
        <div className="bg-teal-300 w-6/12 flex flex-col">
        <div className="bg-gray-700 text-slate-50 flex justify-center hover:text-indigo-500 cursor-pointer" onClick={() => allowMultipleSelection()}>{displayText[mulIndex]}</div>
        {data && data.length > 0 ?  
        data.map((dataitem) => {
            return <div className="bg-rose-600 my-5 w-full flex flex-col">
            <h3 className="hover:text-indigo-500 cursor-pointer flex justify-center" onClick={() => handleClick(dataitem.id)}>{dataitem.question}</h3>
            <div>{
                currentId[dataitem.id] === 1?
                <div className="bg-slate-300 flex justify-center">{dataitem.answer}</div>:
                null
            }</div>
        </div>
         }) : <div> No Data found </div>}
         </div>
    </div>
}