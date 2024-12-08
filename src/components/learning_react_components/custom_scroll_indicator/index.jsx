import { useEffect, useState } from 'react'
import '../../../output.css'


export default function ScrollIndicator({ url }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [width, setWidth] = useState(()=>{
        const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100 
        return scrollPercentage
    })

    async function fetchData(getURL) {
        try {
            setLoading(true)
            const responses = await fetch(getURL)
            const datamd = await responses.json()
            if (datamd && datamd.products && datamd.products.length > 0) {
                setData(datamd.products)
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
            setErrMsg(e.message)
            setLoading(false)
        }
    }
    function handleScroller() {
        const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
        setWidth(scrollPercentage)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroller)

        return (() => {
            window.removeEventListener('scroll', () => { })
        })
    }, [])

    useEffect(() => {
        fetchData(url)
    }, [url])

    return <div className='w-screen h-max'>
        <p className='text-5xl p-4'>Custom Scroll Indicator</p>
        <div className='w-screen h-5 flex justify-start'>
            <div className='h-full bg-blue-900' style={{ width: `${width}%` }}></div>
        </div>
        <div>
            {
                data && data.length ? data.map((prod, _) => {
                    return <p className='m-4'>{prod.title}</p>
                }) : null
            }
        </div>
    </div>
}