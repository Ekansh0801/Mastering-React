import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [btn,setbtnName] = useState('Light');
    const cartItems = useSelector((store) => store.cart.cartItems)
    const user = useContext(UserContext);
    return (
        <div className='flex justify-between px-10 py-5 shadow-md'>
            <Link to='/' className="font-bold text-2xl"><h1>AJIO</h1></Link>
            <ul className='flex justify-between w-[40%]'>
                <li className="men"><Link to='/men'>MEN</Link></li>
                <li className="women"><Link to='/women'>WOMEN</Link></li>
                <li className="kid"><Link to='/kid'>KIDS</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/grocery'>GROCERY</Link></li>
                <li><Link to='/cart'>CART - {cartItems.length}</Link></li>
                <li>{user.name}</li>
            <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0]" onClick={() => {
                setbtnName(btn === 'Light' ? 'Dark' : 'Light')
            }}>{btn}</button>
            </ul>
        </div>
    )
}

export default Navbar;