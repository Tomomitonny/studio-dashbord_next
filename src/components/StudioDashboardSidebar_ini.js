
import React, { useEffect, useState } from 'react';

export function StudioDashboardSidebar_ini() {



  return (
    <div>   
      <div>
        
          <div
            className="bg-white border border-gray-300 pl-72 text-left">
              <div
                className="text-sm font-semibold text-gray-500 mt-6">
                  Back to Studios
              </div>
              <div
                className="text-xl font-semibold mt-2">
                  Un Dance Studio
              </div>

            <div
              className="flex mt-6 text-sm text-gray-500 gap-10">
              
              <button
                className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
                  Details
              </button>
              <button
                className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
                  Rooms
              </button>
              <button
                className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
                  Meida
              </button>
              <button
                className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
                  Instructor
              </button>
              <button
                className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
                  Lessons
              </button>

              </div>
          </div>
  
        
        
      </div>
    </div>
      
  );
}
