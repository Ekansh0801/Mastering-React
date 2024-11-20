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
    <div className='product'>
        <h1>Product Info</h1>
    <img className='product_img' src={image}/>
    <h1>{title}</h1>
    <p>{singleProduct.rating.rate} ratings</p>
    <p>Price : {price}</p>
    <p>{description}</p>
</div>
  )
}

export default ProductDetails