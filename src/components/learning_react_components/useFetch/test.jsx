import useFetch from "."
import '../../../output.css'

export default function UseFetchTest(){
    const {data, loading, error} = useFetch('https://dummyjson.com/products', {})
    return <div className="w-screen h-max">
        <h1 className="text-5xl">use Fetch Test Initiated ....</h1>
        {
            loading ? <p className="text-2xl">Loading, please Wait</p>: null
        }
        {
            error?<p>{error}, something went wrong!</p>:null    
        }
        {
            data && data.products && data.products.length ?
            data.products.map((items, idx) => <p className = 'm-4'key={items.key}>{items.title}</p>) : null
        }
    </div>
}