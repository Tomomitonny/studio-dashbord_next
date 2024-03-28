import React from "react";
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar'
import { Rooms } from '../../../data/exportConstRooms'

function TableHeader() {
  return (   
    <thead
      className="text-xs text-gray-700 bg-gray-50"
    >
      <tr>
        <th
          scope="col"
          className="p-4"
        >
          <div
            className="flex items-center px-16"
          >
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="
              w-4 h-4 
              text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label 
              htmlFor="checkbox-all-search" 
              className="sr-only"
              >checkbox
            </label>
          </div>
        </th>
        <th 
          scope="col" 
          className="px-6 py-3"
          >ROOM
        </th>
        <th 
          scope="col" 
          className="px-6 py-3"
          >SIZE
        </th>
        <th 
          scope="col" 
          className="px-6 py-3"
          >PURPOSE
        </th>
        <th 
          scope="col" 
          className="px-6 py-3"
          >DESCRIPTION
        </th>
        <th 
          scope="col" 
          className="px-6 py-3"
          >STATUS
        </th>
      </tr>
    </thead>
  );
}

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr
          key={index}
          className="bg-white border-b hover:bg-gray-50"
        >
          <td 
            className="w-4 p-4"
          >
              <div 
                className="flex items-center px-16"
              >
              <input
                id={`checkbox-table-search-${index}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                 focus:ring-2"
              />
              <label
                htmlFor={`checkbox-table-search-${index}`}
                className="sr-only"
              >checkbox
              </label>
            </div>
          </td>
          <td 
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center"
          >
            <div 
              className="bg-gray-300 w-28 h-16 mr-4"
            ></div>
            {item.roomName}
          </td>
          <td 
            className="px-6 py-4"
            >{item.size}
          </td>
          <td 
            className="px-6 py-4"
            >{item.purpose}
          </td>
          <td 
            className="px-6 py-4"
            >{item.description}
          </td>
          <td
            className="px-6 py-4"
          >
            <div
              className=
              'w-fit px-2.5 py-1 rounded-md bg-green-100 text-green-800 font-medium text-xs'>
                    Public
            </div>
          </td>
        </tr>
      ))}
    </tbody>
    
  );
}

export default function StudioIdRooms() {
  return (
    <div>
      <StudioHeader />
      <StudioDashboardSidebar /> 
      <div>
        <div
          className="bg-gray-100 w-full min-h-screen pb-10"
        >
            <div
              className="pt-20 pl-72 pr-14"
            >       
              <div
                className='my-10 pl-14 py-7 bg-white flex bold text-3xl text-black'
                >Rooms
                  <div
                    className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'
                    >Add Room
                  </div>

              </div>

                <div className="
                  relative overflow-x-auto rounded-md rounded-b-none
                ">
                  <table className="
                    w-full text-sm text-left rtl:text-right text-gray-500
                  ">
                    <TableHeader />
                    <TableBody data={Rooms} />
                  </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
