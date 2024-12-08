import '../../../output.css'
import useFetch from '../useFetch'


export default function () {
    const {data, loading, error} = useFetch('https://dummyjson.com/products?limit=100', {})

    if (error) {
        return <h1>Some error occured! please try again.</h1>
    }

    if (loading) {
        return <h1>Loading, please wait</h1>
    }
    
    function topScroller(){
        /*
        This function does the job, but smoothness is less, to do it more smooth, you have to use setInterval 

        window.scrollTo({
            top:0, left:0, behavior: 'smooth', 
        })

        */
        let deducter = 75
        let height_ini = document.documentElement.scrollTop;

        const closeInterval = setInterval(() => {
            height_ini -= deducter;
            window.scrollTo(0,Math.max(0,height_ini))
            if(height_ini <= 0) clearInterval(closeInterval);
        }, 1);
        return;
    }

    function bottomScroller(){
        let adder = 75
        let height_ini = document.documentElement.scrollTop;

        const closeInterval = setInterval(()=>{
            height_ini += adder
            window.scrollTo(0, Math.min(document.documentElement.scrollHeight-document.documentElement.clientHeight, height_ini))
            if(height_ini >= document.documentElement.scrollHeight-document.documentElement.clientHeight) clearInterval(closeInterval)
        },1);
        return;
    }

    return <div className='h-max w-screen bg-stone-400'>
        <h1 className='text-3xl p-4'>Scroll To Bottom and Top </h1>
        <button onClick={bottomScroller} className='border-2 bg-white rounded-full p-2 m-2'>Scroll to Bottom </button>
        <ul>
            {
                data && data.products && data.products.length ? data.products.map((productItem, idx) => <li className='m-3 text-lg'>{productItem.title}</li>) : null
            }   
        </ul>
        <button onClick={topScroller} className='border-2 bg-white rounded-full p-2 m-2' >Scroll to top</button>
        <h1 className='text-3xl p-4'>This is bottom of the page</h1>
    </div>

}