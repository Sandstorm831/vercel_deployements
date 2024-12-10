import '../../output.css'
import { FaXTwitter, FaMedium, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function randomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function BusinessCard(){

    return (
    <div className='w-full h-full bg-white'>
        <div className='group p-1 w-full h-full bg-white rounded-3xl cursor-pointer relative'>
                <img src={`/static/images/skulls/${randomMinMax(0,4)}.jpeg`} alt='The default skull' className='w-full h-full object-cover rounded-3xl
                                                                                                        shadow-[0_10px_14px_5px_rgba(0,0,0,0.2)] 
                                                                                                        opacity-90 hover:opacity-100 transition
                                                                                                        duration-300 ease-in-out '/>
                <h2 className='absolute  left-8 bottom-8 text-white group-hover:bottom-32 group-hover:transition-bottom group-hover:delay-0 group-hover:duration-300 transition-bottom delay-300 duration-300'>Card Heading</h2>
                <p className='absolute left-8 top-64 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-300 transition duration-300'>Something is always better than nothing</p>
                <FaXTwitter className='absolute left-8 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-300 transition duration-300'/>
                <FaFacebookF className='absolute left-16 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-[400ms] transition duration-300'/>
                <FaInstagram className='absolute left-24 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-[500ms] transition duration-300'/>
                <FaGithub className='absolute left-32 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-[600ms] transition duration-300'/>
                <FaMedium className='absolute left-40 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-[700ms] transition duration-300'/>
                <FaLinkedinIn className='absolute left-48 bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-[800ms] transition duration-300'/>
        </div>
    </div>
    )
}