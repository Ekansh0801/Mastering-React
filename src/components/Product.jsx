const Product = (props) => {
    const {image,title,price,ratings} = props.product
      return (
          <div className='product'>
              <img className='product_img' src={image}/>
              <h1>{title}</h1>
              <p>{ratings} ratings</p>
              <p>Price : {price}</p>
          </div>
      )
  }

  export default Product;