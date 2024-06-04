import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
  const [products] = useContext(ProductsContext);
  let dist_category = products && products.reduce((ac, cv) => [...ac,cv.category], []);
  dist_category = [...new Set(dist_category)]

  const color = ()=>{
    return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, 0.4)`
  }

  return (
    <nav className="w-[15%] fixed overflow-hidden py-4 h-full bg-zinc-100 flex flex-col items-center">
        <a
          href="/create"
          className="px-3 py-2 border border-blue-300 text-blue-400 rounded text-sm font-semibold"
        >
          Add new Product
        </a>
        <hr className="w-[80%] my-5" />
        <h1 className="w-[80%] font-semibold text-2xl">Category</h1>
        <div className="w-[80%] mt-4">

        {
          dist_category.map((c, id) => (
            <Link key={id} to={`/?category=${c}`} className=" mb-2 flex items-center gap-2">

              <span 
                style={{backgroundColor: color()}}
                className="w-[13px] h-[13px] rounded-full"></span>
              {c}
          </Link>
          ))
        }

          
          
        </div>
      </nav>
  )
}

export default Nav
