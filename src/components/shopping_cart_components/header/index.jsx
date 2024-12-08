import { Link } from "react-router-dom"
import "../../../output.css"

export default function Header(){
    return <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
            <Link to={'/shoppingcart'}>
                <div className="ml-5">
                    <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                        REACT RECOIL SHOPPING CART
                    </h1>
                </div>
            </Link>
            <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
                <Link to={'/shoppingcart'}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={'/shoppingcart/cart'}>
                    <li className="cursor-pointer">Cart</li>
                </Link>
            </ul>
        </nav>
    </div>
}