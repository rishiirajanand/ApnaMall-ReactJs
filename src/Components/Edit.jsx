import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [products, setProducts] =  useContext(ProductsContext);

    const [product, setProduct] = useState({
        title : '',
        image : '',
        description : '',
        category : '',
        price : ''
    })
    
  useEffect(()=>{
    setProduct(products.filter(p => p.id == id)[0])
    
  }, [id]);

  const productChangeHandler = (e)=>{

    setProduct({...product, [e.target.name] : e.target.value});
  }


  const addProductHandler = (e)=>{
    e.preventDefault();
    if(
        product.title.trim().length < 5 || 
        product.image.trim().length < 5 || 
        !product.price || 
        product.category.trim().length < 5 || 
        product.description.trim().length < 5)
      {
        alert('Each and every field required more than 5 character');
        return;
      }
    
    
      const pIndex = products.findIndex(p => p.id == id);
      
      const copyData = [...products];
      copyData[pIndex] = {...products[pIndex] , ...product}

    setProducts(copyData);
    localStorage.setItem('products', JSON.stringify(copyData));
    
    navigate(-1);
  }


  return (
    <form onSubmit={addProductHandler} className="w-screen h-screen p-[4%] flex flex-col items-center">
      <h1 className="text-3xl w-1/2 mb-5 font-semibold">
        Edit Product
    </h1>
      <input
        type="url"
        placeholder="image url"
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2 hover:border-blue-300"
        name='image'
        onChange={productChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        name='title'
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2"
        onChange={productChangeHandler}
        value={product && product.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name='category'
          placeholder="category"
          className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-[48%]"
          onChange={productChangeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          name='price'
          className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-[48%]"
          onChange={productChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
      name='description'
        onChange={productChangeHandler}
        value={product && product.description}
        placeholder="enter product description..."
        className="text-1xl mb-5 bg-zinc-100 rounded-md p-2 w-1/2"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button
            type="submit"
            className="px-3 py-2 border border-blue-300 text-blue-400 rounded text-sm font-semibold"
        >
            Submit
        </button>
      </div>
    </form>
  )
}

export default Edit
