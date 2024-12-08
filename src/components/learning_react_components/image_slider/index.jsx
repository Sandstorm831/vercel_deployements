import { useEffect, useState } from 'react'
import '../../../output.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function ImageSlider({ url, page = 1, limit = 10 }) {
    let [image, setImage] = useState([])
    let [images, setImages] = useState([])
    let [index, setIndex] = useState(0)
    let [loading, setLoading] = useState(false)
    let [err, setErr] = useState(null)

    async function fetchImages(getURL) {
        try {
            setLoading(true);
            let response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
            let data = await response.json();

            if (data) {
                setImages(data)
                setImage([data[index]])
                setLoading(false)
            }

        } catch (e) {
            setErr(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])


    useEffect(() => {
        setImage([images[index]])
        // eslint-disable-next-line
    }, [index])

    if (loading) {
        return <div>Please Wait, content is loading</div>
    }
    if (err !== null) {
        return <div>Some error occured!</div>
    }

    // console.log(image)

    function LeftHandle() {
        if (index === 0) {
            setIndex(images.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    function RightHandle() {
        setIndex((index + 1) % (images.length))
    }

    function CircleClick(ind) {
        if (ind !== index) {
            setIndex(ind)
        }
    }
    
    return <div className='bg-fuchsia-950 w-screen h-screen flex justify-center'>
        
            
         <IconContext.Provider value={{ size: 70 }}><BsArrowLeftCircleFill onClick={() => LeftHandle()} className='cursor-pointer self-center' /></IconContext.Provider>
          <div className='w-1/2 h-1/2 flex flex-col justify-center self-center'>

            <div className='flex'>
                {
                    image && image.length ?
                        image.map((imgItem) => {
                            return <img
                                key={imgItem.id}    
                                alt={imgItem.download_url}
                                src={imgItem.download_url}
                                className='bg-red-800'
                            />
                        }) : null
                }
            </div>
            <div className= 'flex justify-center'>
                {
                    images && images.length ?
                        images.map((_, ind) => {
                            if (index === ind) {
                                return <button key={ind} className='rounded-full border-8 border-amber-400 p-1 mx-1' onClick={() => CircleClick(ind)}></button>
                            }
                            return <button key={ind} className='rounded-full border-8 border-amber-900 p-1 mx-1' onClick={() => CircleClick(ind)}></button>
                        })
                        : null
                }
            </div>
        </div>
        <IconContext.Provider value={{ size: 70 }}><BsArrowRightCircleFill onClick={() => RightHandle()} className='cursor-pointer self-center' /></IconContext.Provider>
    </div>
}