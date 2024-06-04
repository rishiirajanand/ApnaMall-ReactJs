import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { ProductsContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductsContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filterCategory, setFilterCategory] = useState(products)
  

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setFilterCategory(data);

    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if(!filterCategory || category == 'undefined'){
        setFilterCategory(products)
    }
    if (category != 'undefined') {
      getProductCategory();
    }
  }, [category, products]);


  return products ? (
    <>
      <Nav />

      <div className="w-[85%] ml-[18%] h-full p-5 overflow-y-scroll flex felx-col flex-wrap gap-6">
        { 
             filterCategory && filterCategory.map((product) => (
                <Link
                    to={`/details/${product.id}`}
                    key={product.id}
                    className="card w-[200px] h-[350px] rounded text-center border shadow-md hover:shadow-[0_1px_20px_1px_rgba(0,0,0,0.3)] p-2 "
                >
                    <div className="w-full h-[50%] bg-zinc-100 mb-2 rounded overflow-hidden">
                    <img className="w-full h-full" src={product.image} alt="bag" />
                    </div>
                    <div className="w-full h-[50%] flex justify-center items-center">
                    <h1 className="font-semibold">{product.title}</h1>
                    </div>
                </Link>
            ))
            
        }
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
