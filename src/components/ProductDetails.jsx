import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../hooks/useGetSingleProduct';

const ProductDetails = () => {

    const params = useParams();
    const singleProduct =  useGetSingleProduct(params.id);
    if(singleProduct === null) {
        return <h1>Loading...</h1>
    }
    const {image,title,description,price} = singleProduct;
  return  (
    <div className='max-w-5xl mx-auto mt-10'>
<div className='border border-gray-600 rounded-md p-5'>
        <h1 >Product Info</h1>
    <img className='w-32' src={image}/>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p className='font-bold text-gray-700'>{singleProduct.rating.rate} ratings</p>
    <p className='font-bold text-gray-700'>Price : {price}</p>
    <p>{description}</p>
</div>
    </div>
    
  )
}

export default ProductDetails