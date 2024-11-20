import Product, { HOC } from "./Product";
import { productData } from "../utils/constant";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [serachText, setSearchText] = useState([]);
  const [tempProdList, setTempProdList] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    //  console.log(resData);
    setFilteredList(resData);
    setTempProdList(resData);
  };

  const HOCComponent = HOC(Product)

  // []  ---> only called one time during rendering
  // no dependency array passed ---> calles each time this page is rendered
  // [kuch]  ---> called each time kuch is changed
  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      console.log("Functional Component!!");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Clean Up!!");
    };
  }, []);

  //conditional rendering

  // if(filteredList.length === 0){
  //   return (
  //     <Skeleton/>
  //   )
  // }

  return filteredList.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div className="mt-10 flex mx-5 space-x-10 items-center">
        <div>
        <input
          className="border border-gray-700 p-2  bg-gray-200"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={serachText}
        />
        <button
          onClick={() => {
            setTempProdList(
              filteredList.filter((prod) => {
                return prod.title
                  .toLowerCase()
                  .includes(serachText.toLowerCase().trim());
              })
            );
          }}
          className="bg-purple-600 px-6 py-2 rounded-sm text-white"
        >
          Search
        </button>
        </div>
        <button
        onClick={() => {
          setTempProdList(tempProdList.filter((prod) => prod.rating.rate >= 4));
        }}
        style={{ marginTop: "10px" }}
        className="bg-purple-600 px-6 py-2 rounded-sm text-white"
      >
        Top Rated Products
      </button>        
      </div>

      <div className=" max-w-7xl mx-auto mt-10 grid grid-cols-5 gap-4">
        {tempProdList.map((product, index) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {
                product.rating.rate >= 4 ? <HOCComponent product={product}/> :  <Product product={product} />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
