import { useContext } from "react"
import { GlobalContext } from "../../../context/recipe_app_context/index"
import RecipeItem from "../../../components/recipe_app_components/recipe_item/index"

export default function RecipeAppFavourites(){
    const { favouritesList } = useContext(GlobalContext)


    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favouritesList && favouritesList.length > 0 ?
            favouritesList.map((item, idx) => {
                return <RecipeItem item={item} key={idx} />
            })
            : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing added in favourites</div>
        }
    </div>
}