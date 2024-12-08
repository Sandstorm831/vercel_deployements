import { useState } from 'react'
import '../../../output.css'
import Modal from './modal'



export default function ModalTest(){
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handletoggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }

    return <div className=' flex justify-center w-screen h-screen bg-teal-200' >
        {
            showModalPopup ? <Modal setPopupWindow = {handletoggleModalPopup}/>:<button className='text-3xl border-2 rounded-full' onClick={() => {handletoggleModalPopup()}}>Open Modal Popup</button>
        }   
    </div>
}