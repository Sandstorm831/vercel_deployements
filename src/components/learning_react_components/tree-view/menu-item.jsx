import { useState } from 'react'
import '../../../output.css'
import MenuList from './menu_list'


export default function MenuItem({Item}){
    const [recursor, setRecursor] = useState(false)

    function handleClick(){
        recursor? setRecursor(false):setRecursor(true)
    }

    return <div className='mx-2 border-white cursor-pointer mb-5'>
        <span><span className='text-4xl text-white'>{Item.label}</span>
        <span>{Item.children? recursor ?<span onClick={handleClick} className='text-4xl text-white'>-</span>:<span onClick={handleClick} className='text-4xl text-white'>+</span>:null}</span></span>
        {
            Item && Item.children && Item.children.length && recursor ? 
            <MenuList list={Item.children} />
            : null
        }
    </div>
}