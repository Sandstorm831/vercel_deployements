import { useRef, useState } from 'react'
import '../../../output.css'
import useOutsideClick from '.'

export default function OutsideClickTest(){
    const ref = useRef()
    const [showContent, setShowContent] = useState(false)
    useOutsideClick(ref, () => {setShowContent(false)})

    function handleClick(){
        setShowContent(true)
    }

    return <div className='h-screen w-screen bg-red-100'>
        <button className='border-2 p-2 bg-blue-400 rounded-full' ref = {ref} onClick={handleClick} >Show Content</button>
        {
            showContent ? 
            <div>
                This is a Random Conent, Please click outside the button to close me, it won't close on clicking on the button.
            </div>: null
        }
    </div>
}