import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        console.log("here")
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json()
            console.log(data)
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/recipeapp')
            }


        } catch (error) {
            console.log(error)
            setLoading(false)
            setSearchParam('')
        }
    }

    function handleAddtoFavourites(getCurrentItem){
        let cpyFavouritesList = [...favouritesList];
        const index = cpyFavouritesList.findIndex(item => item.id === getCurrentItem.id); 
        if(index === -1){
            cpyFavouritesList.push(getCurrentItem);
        }
        else{
            cpyFavouritesList.splice(index, 1);
        }
        setFavouritesList(cpyFavouritesList);
        console.log(favouritesList);
    }

    console.log(loading, recipeList)


    return <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetailsData, setRecipeDetailsData, handleAddtoFavourites, favouritesList   }}> {children} </GlobalContext.Provider>;
}