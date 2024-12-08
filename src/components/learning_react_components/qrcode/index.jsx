import QRCode from 'react-qr-code'
import '../../../output.css'
import { useState } from 'react'

export default function QRCodeGenerator(){

    const [qrcode, setQRcode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerator(){
        setQRcode(input);
        setInput('')
    }
    return <div className='w-screen h-screen flex flex-col '>
        <h1>QR Code Generator</h1>
        <div>
            <input value = {input} onChange={(txt) => {setInput(txt.target.value)}} type='text' name='qr-code' placeholder='Enter your value here' className='border-slate-950 border' />
            <button className = 'mx-1' disabled = {input && input.trim() !== '' ? false:true} onClick={handleGenerator}>Generate</button>
        </div>
        <div className='flex justify-center m-8'>
            <QRCode 
            id='qr-code-value'
            value={qrcode}
            />
        </div>
    </div>
}