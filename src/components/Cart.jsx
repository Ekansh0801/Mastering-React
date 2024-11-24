import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const clearCartHandler = () => {
    dispatch(clearItems());
  }
  return (
    <div className="max-w-5xl mx-auto mt-10 ">
        <div className="flex items-center justify-between">
        <h1 className="font-bold text-xxl">Cart - ({cartItems.length})</h1>
        <button onClick={clearCartHandler} className="bg-purple-700  text-white rounded-md px-4 py-1">Clear Cart</button>
        </div>

      {
        cartItems.map((item) => (
            <div className='border border-gray-600 my-10 rounded-md p-5 flex flex-col items-center justify-between gap-5'>
    <img className='w-32' src={item.image}/>
    <h1 className='font-bold text-xl'>{item.title}</h1>
    <p className='font-bold text-gray-700'>{item.rating.rate} ratings</p>
    <p className='font-bold text-gray-700'>Price : {item.price}</p>
    <p>{item.description}</p>
            </div>
        ))
      }
    </div>
  );
};

export default Cart;
