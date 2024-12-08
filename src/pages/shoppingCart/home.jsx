import { useEffect } from "react";
import { Circles } from "react-loader-spinner";
import ProdctTile from "../../components/shopping_cart_components/product-tile/index";
import { useRecoilState } from "recoil";
import { loadingState, productArray } from "../../store/shopping_cart_store/atoms/index";

export default function ShoppingCartHome() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [products, setProducts] = useRecoilState(productArray);

  async function fetchListofProducts() {
    if (products.length !== 0) return;
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.forEach((obj) => {
      Object.defineProperty(obj, 'toCart',{
        value: false,
        writable: true,
        configurable: true,
        enumerable: true,
      })
    });
    if (data) {
        console.log(data);
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListofProducts();
  }, []);


  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProdctTile product={productItem}/>
              ))
            : null}
        </div>
      )}
    </div>
  );
}
