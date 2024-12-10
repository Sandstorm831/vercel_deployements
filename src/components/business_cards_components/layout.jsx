import '../../output.css'
import BusinessCard from './businessCard'

export default function Layout(){
    return (
    <div>
        <div className='bg-white text-black w-screen h-[400px] flex flex-row justify-center'>
            <div className='flex flex-row justify-between w-full mx-[350px] my-[10px] bg-white text-black'>
                <div className='w-full bg-red-200 mx-[50px] '><BusinessCard  /></div>
                <div className='w-full bg-red-300 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-400 mx-[50px] '><BusinessCard /></div>
            </div>
        </div>

        <div className='bg-white text-white w-screen h-[400px] flex flex-row justify-center'>
            <div className='flex flex-row justify-between w-full mx-[350px] my-[10px] bg-white text-black'>
                <div className='w-full bg-red-200 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-300 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-400 mx-[50px] '><BusinessCard /></div>
            </div>
        </div>

        <div className='bg-white text-white w-screen h-[400px] flex flex-row justify-center'>
            <div className='flex flex-row justify-between w-full mx-[350px] my-[10px] bg-white text-black'>
                <div className='w-full bg-red-200 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-300 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-400 mx-[50px] '><BusinessCard /></div>
            </div>
        </div>

        <div className='bg-white text-white w-screen h-[400px] flex flex-row justify-center'>
            <div className='flex flex-row justify-between w-full mx-[350px] my-[10px] bg-white text-black'>
                <div className='w-full bg-red-200 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-300 mx-[50px] '><BusinessCard /></div>
                <div className='w-full bg-red-400 mx-[50px] '><BusinessCard /></div>
            </div>
        </div>
    </div>
    )
}