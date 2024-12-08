import { useContext } from "react"
import { GlobalContext } from "../../../context/recipe_app_context/index"
import RecipeItem from "../../../components/recipe_app_components/recipe_item/index"

export default function Home(){

    const {recipeList, loading} = useContext(GlobalContext)

    if(loading) return <div>Loading... Pease wait!</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ?
            recipeList.map((item, idx) => {
                return <RecipeItem item={item} key={idx} />
            })
            : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show, Please search something else</div>
        }
    </div>
}