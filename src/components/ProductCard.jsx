import Product from "./Product";
import { productData } from "../utils/constant";

const ProductCard = () => {
    return (
        <div className='product_card'>
            {
              productData.map((product,index) => {
                return (
                  <Product key={product.id} product={product}/>
                )
              })
            }
        </div>
    )
}

export default ProductCard;