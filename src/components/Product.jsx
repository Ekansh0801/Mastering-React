const Product = (props) => {
    const {image,title,price,rating} = props.product
      return (
          <div className='flex flex-col justify-between items-center h-[450px] border border-gray-600 p-4 hover:bg-gray-200'>
              <img className='w-32' src={image}/>
              <h1>{title}</h1>
              <p>{rating.rate} ratings</p>
              <p>Price : {price}</p>
          </div>
      )
  }

  export default Product;


export const HOC = (Product) => {

    return (props) => {
        return (
            <div className="relative">
                <span className="absolute -left-2 -top-2 bg-black text-white px-4 py-1 rounded-md ">Best Seller</span>
                <Product {...props}/>
            </div>
        )
    }
  }