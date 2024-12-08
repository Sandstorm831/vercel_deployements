import { NavLink } from 'react-router-dom'
import '../../../output.css'
import { useContext } from 'react'
import { GlobalContext } from '../../../context/recipe_app_context/index'

export default function Navbar(){

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)


    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
        <h2 className="text-2xl font-semibold"><NavLink to={"/recipeapp"}>FoodRecipie</NavLink></h2>
        <form onSubmit={handleSubmit} className='text-white'>  
            <input
            type='text'
            name='search'
            placeholder='Enter Items...'
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            className='bg-black/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-400'
            />
        </form>
        <ul className='flex gap-5'>
            <li>
                <NavLink to={"/recipeapp"} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={"/recipeapp/favourites"} className="text-black hover:text-gray-700 duration-300">Favourites</NavLink>
            </li>
        </ul>
    </nav>
}
