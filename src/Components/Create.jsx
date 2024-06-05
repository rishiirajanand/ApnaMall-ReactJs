import React, { useContext, useState } from "react";
import { ProductsContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Create() {
  const [products, setProducts] =  useContext(ProductsContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate()

  const addProductHandler = (e)=>{
    e.preventDefault();
    if(title.trim().length < 5 || image.trim().length < 5 || price.trim().length < 1 || category.trim().length < 5 || description.trim().length < 5)
      {
        alert('Each and every field required more than 5 character');
        return;
      }
    const product = {
        id : nanoid(),
        image,
        title,
        price,
        category,
        description
    }
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));

    toast.success('Product Added successfully');

    navigate('/');
  }

  return (
    <>
      <form onSubmit={addProductHandler} className="w-screen h-screen p-[4%] flex flex-col items-center">
      <h1 className="text-3xl w-1/2 mb-5 font-semibold">
        Add New Products
    </h1>
      <input
        type="url"
        placeholder="image url"
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2 hover:border-blue-300"
        onChange={(e) => setImage(() => e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2"
        onChange={(e) => setTitle(() => e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-[48%]"
          onChange={(e) => setCategory(() => e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-[48%]"
          onChange={(e) => setPrice(() => e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(() => e.target.value)}
        value={description}
        placeholder="enter product description..."
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button
            type="submit"
            className="px-3 py-2 border border-blue-300 text-blue-400 rounded text-sm font-semibold"
        >
            Add new Product
        </button>
      </div>
    </form>
    </>
  );
}

export default Create;
