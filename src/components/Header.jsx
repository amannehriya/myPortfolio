import { useRef, useState } from "react"
import Navbar from "./Navbar"


function Header() {
   const [navopen,setnavopen] = useState(false);
  
  return (
   <header className="w-full  h-20 fixed top-0 left-0 flex items-center z-40 bg-gradient-to-b from-zinc-900
   to-zinc-900/0 ">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center
    md:px-6  ">
        <h1>
            <a href="/" 
            className="">logo</a>
        </h1>

<div className="relative md:justify-self-center ">
    <button
    className="menu-btn md:hidden "
    onClick={()=> setnavopen((prev)=>!prev)}
    >
        <span className="material-symbols-rounded md:hidden">
            {navopen ? 'close' : 'menu'}
        </span>
       </button>
            <Navbar navopen={navopen}/>
   
</div>
<a href="#contact"
className="btn btn-secondary max-md:hidden
md:justify-end "
>
    Contact Me 
</a>
    </div>


   </header>
  )
}

export default Header