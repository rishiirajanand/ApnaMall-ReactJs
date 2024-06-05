import React, {useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading';
import { ProductsContext } from '../utils/Context';

function Details() {

  const [products, setProducts] = useContext(ProductsContext)
  const [product, setProduct] = useState(null)
  const {id} = useParams();
  const navigate = useNavigate()

  // const getDetails = async ()=>{
  //   const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //   setProduct(data)
  // }

  useEffect(()=>{
    if(!product){
      setProduct(()=> products.filter(p => p.id == id)[0])
    }
    
    // getDetails()
    // console.log(product)
  },[])


  // Delete Product
  const deleteProductHandler = (id)=>{
    const FilterProducts = products.filter(p => p.id != id);
    setProducts(FilterProducts);
    localStorage.setItem('products', JSON.stringify(FilterProducts));
    navigate('/')
  }



  return product ? (
  
    <div className='w-[70%] h-full flex justify-center items-center gap-10 m-auto p-[10%]'>


      <img 
        className='object-contain w-[50%] h-full' 
        src={product.image}
        alt="" 
      />

      <div className=''>

        <h1 className='text-4xl mb-3'>
            {product.title}
        </h1>
        <h2 className='text-zinc-400'>{product.category}</h2>
        <h3 className='my-3 text-red-300 font-semibold'>$ {product.price}</h3>
        <p className='mb-5'>
            {product.description}
        </p>

        <Link to={`/edit/${product.id}`} className='px-4 font-semibold rounded py-1 border border-blue-600 text-blue-600 mr-5'>
            Edit
        </Link>

        <button onClick={()=> deleteProductHandler(product.id)} className='px-4 font-semibold rounded py-1 border border-red-600 text-red-600'>
            Delete
        </button>

      </div>



    </div>
  ) : < Loading />
}

export default Details
