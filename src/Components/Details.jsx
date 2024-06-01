import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading';

function Details() {

  const [products, setProducts] = useState(null)
  const {id} = useParams();

  const getDetails = async ()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProducts(data)
  }

  useEffect(()=>{
    getDetails()
  },[])

  return products ? (
  
    <div className='w-[70%] h-full flex justify-center items-center gap-10 m-auto p-[10%]'>


      <img 
        className='object-contain w-[50%] h-full' 
        src={products.image}
        alt="" 
      />

      <div className=''>

        <h1 className='text-4xl mb-3'>
            {products.title}
        </h1>
        <h2 className='text-zinc-400'>{products.category}</h2>
        <h3 className='my-3 text-red-300 font-semibold'>$ {products.price}</h3>
        <p className='mb-5'>
            {products.description}
        </p>

        <Link className='px-4 font-semibold rounded py-1 border border-blue-600 text-blue-600 mr-5'>
            Edit
        </Link>

        <Link className='px-4 font-semibold rounded py-1 border border-red-600 text-red-600'>
            Delete
        </Link>

      </div>



    </div>
  ) : < Loading />
}

export default Details
