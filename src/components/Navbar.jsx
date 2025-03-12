import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import image from "../assets/images/logo.png"

import Categories from '../pages/Categories';


export const Navbar = () => {
  return (
      <div className='h-15 border-2 border-[#800000] '>
    
        <div className='logohere flex h-5 '>
           <img src={image} alt="" className='w-[100px] h-[60px]'/>
        </div>
    <div className='navbar text-xl flex justify-end text-[#800000] gap-10'>
    <p>All Books</p>
         <Categories />
        
        <span className='flex bg-[#800000] mr-4 p-2 -mt-3'>
          <span className='text-white'>
        <IoIosAddCircleOutline />
        </span>
        <span className='text-white'>
        <button>Add Books</button>
        </span>
        </span>
    </div>
    </div>

  )
}
