import React, { useEffect, useState } from 'react'

const useGetSingleProduct = (productId) => {

    const [singleProduct,setSingleProduct] = useState(null);
    useEffect(() => {
        fetchSingleProduct();
    },[])

    const fetchSingleProduct = async() => {
        console.log(productId);
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json();
        setSingleProduct(resData);

    }

    return singleProduct;
}

export default useGetSingleProduct