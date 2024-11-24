import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { useDispatch } from 'react-redux';
import { addItems } from '../store/cartSlice';

const ProductDetails = () => {
    
    const dispatch = useDispatch();
    const params = useParams();
    const singleProduct =  useGetSingleProduct(params.id);
    if(singleProduct === null) {
        return <h1>Loading...</h1>
    }
    const {image,title,description,price} = singleProduct;

    const handleCartItem = () => {
      dispatch(addItems(singleProduct))
    }
  return  (
    <div className='max-w-5xl mx-auto mt-10'>
<div className='border border-gray-600 rounded-md p-5 flex flex-col items-center justify-between gap-5'>
        <h1 >Product Info</h1>
    <img className='w-32' src={image}/>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p className='font-bold text-gray-700'>{singleProduct.rating.rate} ratings</p>
    <p className='font-bold text-gray-700'>Price : {price}</p>
    <p>{description}</p>
    <button onClick={handleCartItem} className="bg-purple-700 text-white px-4 py-1 rounded-md mt-2 w-full hover:bg-purple-900">Add To Cart</button>
</div>
    </div>
    
  )
}

export default ProductDetails