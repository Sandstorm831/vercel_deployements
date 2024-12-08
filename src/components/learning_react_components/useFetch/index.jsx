import { useEffect, useState } from "react";

export default function useFetch(url, optoins = {}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData(){
        try{
            setLoading(true)
            const response = await fetch(url)
            if(!response.ok) throw new Error(response.statusText);
            const data = await response.json()
            setData(data)
            setLoading(false)
            setError(null)

        } catch(err){
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {data, loading, error};
}