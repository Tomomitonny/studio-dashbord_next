import React, {useState, useEffect} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";


export function StudioHeader() {

  const [active, setActive] = useState('');
  useEffect(() => {
    console.log("active")
    console.log(active)
  },[active])

  const classToggle = (item) => {
    
    setActive(item)
  }

  const navItems = [
    'Dashboard','Calender','Studios','Inbox','Menu'
  ]
  const menuItems = [
    'rentals','lessons','earning','instructor'
  ]
  const ulStyle = [
    'flex items-center text-sm font-bold gap-8 mt-8 ml-20'
  ]
  const liStyle = [
    'hover:text-blue-500 cursor-pointer'
  ]


  return (
    
    
    
    <header
      className="w-full flex fixed z-10 bg-white">
        <div
          className="h-[76px] bg-white flex justify-center items-center">
          <div
            id="title_s"
            className="md:hidden h-[66px] ml-3.5 my-auto">
              <h2>
                <img
                  src="../../img/a-logo_blue.png" alt="" />
              </h2>
          </div>
          <div
            id="title_l"
            className="hidden md:block w-[207px] h-[66px] ml-3.5 my-auto">
              <h2>
                <img
                  src="../../img/ambition_studio_blue.png" alt="" />
              </h2>
          </div>
        </div>

 <nav
  className='relative'>
    <ul
      className={` ${ulStyle}`}>
        {navItems.map((item) =>{
          return (
            <li 
              onClick={() => classToggle(item)} 
              className={`z-20 ${active===item ? "text-blue-800" : ""} ${liStyle}`} 
            >
              
              {item}
            </li>
          )
        })}
      
        { 
        <ul className={`lessonList absolute top-14 -right-8 pl-2 text-left animate-slideIn z-10 ml-9 border-l ${active==='Menu' ? "" : "hidden"} `}>
          
          { menuItems.map((item) =>{
          return (
            <li 
              onClick={() => classToggle(item)} 
              className={`menu ${active===item ? "bg-blue-800" : ""} `} 
            >
              
              {item}
            </li>
          )
        })}
        </ul>
      }
    </ul>    
  </nav>
  <div
            className="flex items-center ml-auto mr-9 my-auto whitespace-nowrap gap-6">
              <MdLanguage size={28}/>
              <FaRegBell size={22}/>

              <div
                className="h-[45px] border border-gray-400 rounded-full py-2 px-6 font-semibold text-xl">
                  <div
                    className="">
                      email@email.com
                  </div>
              </div>
          </div>
  
 
  

</header>


  );
}

