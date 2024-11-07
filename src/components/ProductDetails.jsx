import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const [singleProduct,setSingleProduct] = useState(null);
    const params = useParams();
    console.log(params.id)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        console.log(data);
        const resData = await data.json();
        console.log(resData);
        setSingleProduct(resData);

    }
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