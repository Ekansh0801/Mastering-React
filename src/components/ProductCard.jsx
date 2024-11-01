import Product from "./Product";
import { productData } from "../utils/constant";
import { useState } from "react";

const ProductCard = () => {

  const [filteredList,setFilteredList] = useState(productData);

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