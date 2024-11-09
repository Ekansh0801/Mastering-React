import Product from "./Product";
import { productData } from "../utils/constant";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const ProductCard = () => {

  const [filteredList,setFilteredList] = useState([]);
  const [serachText,setSearchText] = useState([]);
  const [tempProdList,setTempProdList] = useState([]);
  const  fetchData = async() => {
    const data =  await fetch('https://fakestoreapi.com/products');
    const resData = await data.json();
    //  console.log(resData);
     setFilteredList(resData);
     setTempProdList(resData);
  }
 
   // []  ---> only called one time during rendering
   // no dependency array passed ---> calles each time this page is rendered 
   // [kuch]  ---> called each time kuch is changed
  useEffect(() => {
    fetchData();
  },[])


  //conditional rendering

  // if(filteredList.length === 0){
  //   return (
  //     <Skeleton/>
  //   )
  // }

    return filteredList.length === 0 ? <Skeleton/> : (
       <div>
        <div style={{"marginTop":"10px"}}>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} value={serachText}/>
        <button onClick={() => {
          setTempProdList(filteredList.filter((prod) => {
            return prod.title.toLowerCase().includes(serachText.toLowerCase().trim());
          }))
        }}>Search</button>
        </div>
        <button onClick={() => {
          setTempProdList(tempProdList.filter((prod) => (
            prod.rating.rate >= 4
          )))
        }} style={{"marginTop":"10px"}}>Top Rated Products</button>
        <div className='product_card'>
            {
              tempProdList.map((product,index) => {
                return (
                  <Link key={product.id} to={`/product/${product.id}`}><Product  product={product}/></Link>
                )
              })
            }
        </div>
       </div>
    )
}

export default ProductCard;