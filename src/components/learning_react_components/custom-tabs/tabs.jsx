import { useState } from 'react'
import '../../../output.css'


export default function CustomTabs({tabsContent, onChange}){
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleTabClick(getIndex){
        setCurrentIndex(getIndex)
        onChange(getIndex)
    }

    return <div className='w-screen h-screen flex justify-center bg-blue-100'>
        <div className='content-center h-full w-max bg-blue-900'>
            <div className='flex bg-red-700'>
                {
                    tabsContent.map((tabs, indx) => {
                        return <div className='m-2 p-2 border-2 cursor-pointer text-5xl' onClick= {() => handleTabClick(indx)} key={tabs.label}>
                            <span>{tabs.label}</span>
                        </div>
                    })
                }
            </div>
            <div className='flex justify-center bg-gray-500 self-center text-3xl'>
                {
                    tabsContent[currentIndex] && tabsContent[currentIndex].content
                }
            </div>
        </div>
    </div>
}   