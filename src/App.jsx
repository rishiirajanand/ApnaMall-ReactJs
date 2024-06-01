import { Link, Route, Router, Routes, useLocation } from "react-router-dom"
import Home from "./Components/Home"
import Details from "./Components/Details"

function App() {

  const {search, pathname} = useLocation();
  console.log(search, pathname)

  return (
    <>
      <div className="w-screen h-screen flex">

        {
          (pathname != '/' || search.length > 0) && (
            <Link 
              to='/' 
              className="absolute left-[15rem] top-4 text-red-400 "
            >
              Home
            </Link>
          )
        }
        
        
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={< Details />}/>
        </Routes>
        

      </div>
    </>
  )
}

export default App
