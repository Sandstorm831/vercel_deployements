import { useEffect, useState } from 'react';
import '../../../output.css'
import useLocalStorage from './useLocalStorage'


export default function LightDarkMode(){
    const [theme, setTheme] =  useLocalStorage('theme', 'Dark')
    const [bgc, setBGC] = useState(()=>{
        return theme === 'Light'?'bg-white':'bg-black'
    }) 
    const [txtc, setTXTC] = useState(()=>{
        return theme === 'Light'?'text-black':'text-white'
    })
    function changeTheme(){
        setTheme(theme === 'Light'?'Dark':'Light');
    }

    useEffect(() => {
        if(theme === 'Light'){
            setBGC('bg-white')
            setTXTC('text-black')
        }
        else{
            setBGC('bg-black')
            setTXTC('text-white')
        }
    }, [theme])

    return <div className={'flex flex-col justify-center w-screen h-screen duration-700 ' + bgc}>
        <div>
            <button className={'duration-700 text-5xl '+txtc + ' border-2 p-2 m-4 rounded-full'} onClick={() => changeTheme()}>Change Theme</button>
            <p className={'duration-700 text-5xl '+ txtc}>Hello world</p>
        </div>
    </div>
}