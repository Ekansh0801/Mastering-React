import Product from "./Product";
import { productData } from "../utils/constant";
import { useEffect, useState } from "react";

const ProductCard = () => {

  const [filteredList,setFilteredList] = useState([]);
  const  fetchData = async() => {
    const data =  await fetch('https://fakestoreapi.com/products');
    const resData = await data.json();
    //  console.log(resData);
     setFilteredList(resData);
  }

  useEffect(() => {
    fetchData();
  },[])

    return (
       <div>
        <button onClick={() => {
          setFilteredList(filteredList.filter((prod) => (
            prod.rating.rate >= 4
          )))
        }} style={{"marginTop":"10px"}}>Top Rated Products</button>
        <div className='product_card'>
            {
              filteredList.map((product,index) => {
                return (
                  <Product key={product.id} product={product}/>
                )
              })
            }
        </div>
       </div>
    )
}

export default ProductCard;