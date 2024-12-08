import { useEffect, useState } from 'react'
import '../../../output.css'

export default function LoadMoreData(){
    const [loading, setLoading] = useState(false)
    const [Product, setProducts] = useState([])
    const [count, setCount] = useState(0)

    async function fetchProduct(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0:20*count}`);
            const res = await response.json();
            setLoading(false)
            let newray = [...Product, ...res.products]
            setProducts(newray)
        }catch(e){
            // console.log(e)
            setLoading(false)

        }
    }

    useEffect(()=> {
        fetchProduct()
        // eslint-disable-next-line
    }, [count])
    
    if(loading === true){
        return <div>Loading, please wait</div>
    }

    function LoadMore(){
        setCount(count+1)
    }

    // console.log(Product)

    function Cardholder(props){
        return <div className='flex flex-col justify-center grow w-32 h-32 border-2'>
            <div className='flex justify-center w-full h-max'>
`            <div className='justify-center w-max h-max ' >
                <img className='w-24 h-24' src={props.elmnt.thumbnail} alt={props.elmnt.title} key={props.elmnt.id} />
            </div>`
            </div>
            <div className='justify-center'>{props.elmnt.title}</div>
        </div>
    }

    let final_elem = []
    if(Product && Product.length){
        for(let i=0; i<Math.ceil(Product.length / 5); i++){
            let mid_elem = []
            for(let j = i*5; j<(i+1)*5; j++){
                mid_elem.push(<Cardholder elmnt = {Product[j]} />)
            }
            final_elem.push(<div className='flex'>{mid_elem}</div>)
        }
        if(Product.length > 100){
            const button_elem = <button onClick={()=> {}} className='p-1 m-1 bg-amber-600 border-2 w-max justify-center cursor-not-allowed rounded-lg'>You have reached Limit</button>;
            final_elem.push(<div className='flex justify-center w-full h-max '><div className='justify-center h-max w-max '>{button_elem}</div></div>);
        }
        else{
            const button_elem = <button className='p-1 m-1 bg-amber-600 border-2 w-max justify-center rounded-lg'onClick={LoadMore} >Load More Data</button>;
            final_elem.push(<div className='flex justify-center w-full h-max'><div className='justify-center h-max w-max'>{button_elem}</div></div>);
        }
    }
    return <div className='w-screen h-max flex flex-col bg-gray-400'>
        {final_elem}
    </div>
}