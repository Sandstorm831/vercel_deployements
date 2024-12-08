import {FaStar} from 'react-icons/fa'
import '../../../output.css'
import { useState } from 'react'
import { IconContext } from 'react-icons'

export default function StarRating({numStars = 5}){
    const [rating, setRating] = useState(0)
    const [hoverState, setHoverState] = useState(0)
    const [clickedState, setClickedState] = useState(0)

    function handleClick(currIndex){
        setClickedState(currIndex)
        // console.log("clicking = " + rating)
    }

    function handleMouseOver(currIndex){
        setHoverState(currIndex)
        setRating(hoverState)
        // console.log("hovering = "+rating)
    }

    function handleMouseleave(currIndex){
        setRating(clickedState)
        // console.log("leaving = " + rating + " & " + clickedState)
    }
    return <div className='w-screen h-screen flex justify-center bg-sky-200'>
        {
            [...Array(numStars)].map((_,index) =>{
                index+=1

                return <IconContext.Provider value={index<=rating?{color: 'yellow', size: 70}:{color: 'black', size: 70}}>
                <FaStar 
                // style={}
                key={index}
                // size={70}
                onClick={() => handleClick(index)} // for clicking
                onMouseMove={() => handleMouseOver(index)} // for hovering
                onMouseLeave={() => handleMouseleave(index)} // for cursor leaving
                />
                </IconContext.Provider>
            })
        }
    </div>
}