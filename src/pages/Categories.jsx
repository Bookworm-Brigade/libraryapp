import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdArrowDropdown } from "react-icons/io";




function Categories() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="categories">
        <span className='flex'>
          Categories
           <span className='pt-1'>
                  <IoMdArrowDropdown />
                  </span>
                 </span>
        </Dropdown.Toggle>

         <Dropdown.Menu className="flex flex-col justify-center text-xl text-white bg-[#800000] border-2 w-50 pl-10 gap-5 -mr-20">
          <Dropdown.Item href="#/action-1">title of book</Dropdown.Item>
          <Dropdown.Item href="#/action-2">author</Dropdown.Item>
          <Dropdown.Item href="#/action-3">description</Dropdown.Item>
          <Dropdown.Item href="#/action-4">genre</Dropdown.Item>
          <Dropdown.Item href="#/action-5">status</Dropdown.Item>
          <Dropdown.Item href="#/action-6">year published</Dropdown.Item>
          <Dropdown.Item href="#/action-7">quantity</Dropdown.Item>
        </Dropdown.Menu>
  
       
      </Dropdown>
    );
  }

export default Categories;
