import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [btn,setbtnName] = useState('Light');
    return (
        <div className='navbar'>
            <Link to='/' className="logo"><h1>Logo</h1></Link>
            <ul className='menu_items'>
                <li className="men"><Link to='/men'>MEN</Link></li>
                <li className="women"><Link to='/women'>WOMEN</Link></li>
                <li className="kid"><Link to='/kid'>KIDS</Link></li>
                <li>CART</li>
            <button onClick={() => {
                setbtnName(btn === 'Light' ? 'Dark' : 'Light')
            }}>{btn}</button>
            </ul>
        </div>
    )
}

export default Navbar;