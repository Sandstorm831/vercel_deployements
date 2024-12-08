import { useEffect, useState } from 'react'
import '../../../output.css'
import Suggestions from './suggestoins'


export default function SearchAutoComplete(){
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState([])
    const [err, setErr] = useState(null)
    const [searchPara, setSearchPara] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchPara(query)
        if(query.length > 1){
            const filteredData = user && user.length ? user.filter((item) => { return item.toLowerCase().indexOf(query) > -1}): []
            setFilteredUsers(filteredData)
            setShowDropDown(true)
        }
        else{
            setShowDropDown(false)
        }
    }

    function handleClick(event){
        setShowDropDown(false)
        setSearchPara(event.target.innerText)
        setFilteredUsers([])
    }

    async function fetchListOfUser() {
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            if(data && data.users && data.users.length) {
                setUser(data.users.map((userItem, _) => {return userItem.firstName}))
                setLoading(false)
                setLoading(null)
            }
        } catch(error) {
            console.log(error)
            setErr(error)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchListOfUser();
    }, []);

    // console.log(user, filteredUsers)
    
    return <div className='w-screen h-screen'>
        <input className = 'border-2 'value = {searchPara} onChange = {handleChange} name="search-user" placeholder="Search users here ..." />
        {showDropDown ? <Suggestions handleClick = {handleClick} data = {filteredUsers} /> : null}
    </div> 
}