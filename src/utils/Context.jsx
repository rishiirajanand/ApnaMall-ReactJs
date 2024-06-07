import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';

export const ProductsContext = createContext();

function Context(props) {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null);
    
    const getData = async ()=>{
        try {

            const res = await axios.get('/products');
            const data = await res.data
            
            setProducts(data)

        } catch (error) {
            console.log('Error : ', error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default Context
