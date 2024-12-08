import '../../../output.css'


export default function Modal({setPopupWindow}){
    function handleCloser(){
        setPopupWindow()
    }
    return <div className='border-2 h-5/6 w-full flex justify-center bg-red-800'>
        <div className='content-center'>
            <span onClick={() => {handleCloser()}} className='close-modal-icon text-5xl cursor-pointer border-2 rounded-full'>&times;</span>
        </div>
    </div>
}