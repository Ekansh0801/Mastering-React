import { useState } from "react";

const Navbar = () => {
    const [btn,setbtnName] = useState('Light');
    return (
        <div className='navbar'>
            <h1>Logo</h1>
            <ul className='menu_items'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>CART</li>
            <button onClick={() => {
                setbtnName(btn === 'Light' ? 'Dark' : 'Light')
            }}>{btn}</button>
            </ul>
        </div>
    )
}

export default Navbar;