import React, {useState, useEffect} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";

export function StudioDashboardSidebar() {

  const [active, setActive] = useState('');
  useEffect(() => {
    console.log("active")
    console.log(active)
  },[active])

  const classToggle = (item) => {
    
    setActive(item)
  }

  const menuItems = [
    { name: 'Details', icon: IoPersonOutline },
    { name: 'Rooms', icon: MdOutlineAutoAwesomeMotion }, 
    { name: 'Media', icon: FaRegCalendar },
    { name: 'Instructors', icon: FaRegCommentDots },
    { name: 'Lessons', icon: CiViewTimeline },
    { name: 'Requests', icon: MdMailOutline },
  ]
 
  const sideBarClassName = [
    'top-0 h-full w-60 fixed overflow-auto bg-white z-0'
  ]
  const listStyle = [
    'py-8 px-5 w-full text-base text-gray-600 no-underline justify-start inline-flex item-center hover:bg-gray-100 cursor-pointer transition-all duration-200'
  ]


  return (
    <div
      className="w-full">
    
    
    
    <aside className={`${sideBarClassName}`}>
      <div id="title" className='py-5'>
         
        <div
                className="mt-20 mx-3 py-5 text-base font-semibold text-gray-700 border-t border-b">
                  
              <div
                className="flex justify-center items-center text-xl font-semibold">
                  Un Dance Studio
                    <div
                      className='ml-10'>
                        <IoIosArrowDown />
                    </div>
              </div>
                  </div>
      </div>





 <div className="mt-14">
    <ul className="py-6">
    {menuItems.map((menuItem) => {
              const Icon = menuItem.icon;
              return (
                <li
                  key={menuItem.name}
                  onClick={() => classToggle(menuItem.name)}
                  className={`z-20 ${active === menuItem.name ? "border-l-4 border-transparent border-blue-500 text-blue-500" : ""} ${listStyle}`}
                >
                  <Icon size={25} className='relative mr-4'/>
                  {menuItem.name}
                </li>
        )
      })}
      
        
      
      
      
      
      
      
    </ul>
    
  </div>
  
 
  

</aside>


</div>
  );
}