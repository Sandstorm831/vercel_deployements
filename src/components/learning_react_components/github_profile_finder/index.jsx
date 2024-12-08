import { useEffect, useState } from 'react'
import '../../../output.css'
import UserCard from './user_card'

export default function GithubProfileFinder() {

    const [username, setUsername] = useState("Sandstorm831")
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    function handleSubmit() {
        fetchGithubProfile()
    }
    
    async function fetchGithubProfile(){
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()

        if(data){
            setData(data)
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchGithubProfile()
        // eslint-disable-next-line
    }, [])

    if(loading){
        return <h1 className='w-screen h-screen'>Loading Data, please wait ....</h1>
    }

    return <div className='w-screen h-screen bg-blue-100'>
        <div >
            <input name='search-by-username' 
            type='text' 
            placeholder='Search Github Username...' 
            value={username} 
            onChange={(event) => { setUsername(event.target.value) }}></input>
            <button onClick={handleSubmit} className='border-2 cursor-pointer m-2 p-2 bg-white rounded-full bg-gray-950'>Search</button>
        </div>
        <UserCard user={data} />
    </div>
}