import { useRecoilState } from 'recoil';
import '../../../output.css'
import { productArray } from '../../../store/shopping_cart_store/atoms/index';

export default function ProdctTile({product}){
    const [products, setProducts] = useRecoilState(productArray);

    function addToCart(product){
        const clonedProducts = JSON.parse(JSON.stringify(products));
        clonedProducts.forEach((obj)=>{
            if(obj.id === product.id){
                obj.toCart = !product.toCart;
            }
        })
        setProducts(clonedProducts)
      }

    return <div>
        <div className="group flex flex-col items-center border-2 border-black gap-3 p-4 h-max mt-10 ml-5 rounded-xl">
            <div className="h-[180px]">
                <img
                src={product?.image}
                alt={product?.title}
                className="object-cover h-full w-full" />
            </div>
            <div>
                <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{product?.title}</h1>
            </div>
            <div>
                <h1 className='w-40 truncate text-gray-700 font-bold text-lg'>{product?.price}</h1>
            </div>
            <div className='flex items-center justify-center w-full mt-5'>
                <button className='bg-red-950 text-white border-2 border-rounded-lg font-bold p-4' onClick={()=> addToCart(product)}>{product.toCart ? "Remove from Cart" : "Add to Cart"}</button>
            </div>
        </div>
    </div>;
}