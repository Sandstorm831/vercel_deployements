import { useRecoilValue } from "recoil"
import "../../output.css"
import { productArray } from "../../store/shopping_cart_store/atoms/index"
import ProdctTile from "../../components/shopping_cart_components/product-tile/index"

export default function ShoppingCartCart(){
    let summer = 0;
    const products = useRecoilValue(productArray);
    return <div className="flex justify-evenly">
        <div className="flex flex-wrap my-2 w-1/2">
            {
                products && products.length ? 
                products.map((prod) => {
                    if (prod.toCart) return <ProdctTile product={prod}/>
                })
                :null
            }
        </div>
        <div className="flex flex-col my-2 w-1/2 justify-center">
            {
                products && products.length ? 
                products.map((prod) => {
                    if (prod.toCart){
                        summer += prod.price;
                        return <div className="text-red-950 text-xl text-bold ">{prod.price}</div>
                    }
                }) : null
            }

            <div className="border-t-2 w-max text-xl text-red-950 border-t-red-950 ">{summer}</div>
        </div>
    </div>
}