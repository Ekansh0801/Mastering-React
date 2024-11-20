const Product = (props) => {
    const {image,title,price,rating} = props.product
      return (
          <div className='flex flex-col items-center h-96 border border-gray-600 p-4 hover:bg-gray-200'>
              <img className='w-32' src={image}/>
              <h1>{title}</h1>
              <p>{rating.rate} ratings</p>
              <p>Price : {price}</p>
          </div>
      )
  }

  export default Product;