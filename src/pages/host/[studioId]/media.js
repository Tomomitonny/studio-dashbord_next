import React from "react";
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar'


function MediaCard({ data }) {
  return (
    <div
      className="flex flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[337px] h-[395px] border rounded-md hover:bg-red-50 mr-4 mb-9 p-4 text-black"
        >
          <div 
            className=""
          >
              <div 
                className=""
              >
              <div 
              className="bg-gray-300 w-[305px] h-[183px] mr-4"
            ></div>
            </div>
          </div>
          <div 
            className="w-fit mt-2 px-7 py-1 text-sm bg-red-500 text-gray-50 rounded-full"
          >
            Main Photo for Property
          </div>
          <div 
            className="pt-2 font-medium font-semibold"
          >
            {item.name}
          </div>
          <div 
            className="pt-2 text-gray-600 text-sm"
          >
              location
          </div>
          <div 
            className="text-xl"
          >
              {item.location}
          </div>
          <div 
            className="pt-2 text-gray-600 text-sm"
          >
              caption
          </div>
          <div 
            className="text-xl"
          >
              {item.caption}
          </div>
          
        </div>
      ))}
    </div>
    
  );
}

export default function StudioIdMedia() {
  const cardData = [
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    },
    {
      name: "Photo 1929s-929.jpg",
      location: "Property",
      caption: "This is caption for this image",
    }
  ];

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
                >Media
                  <div
                    className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'
                    >Add Media
                  </div>

              </div>

                <div className="
                  relative overflow-x-auto rounded-md rounded-b-none
                ">
                  <div className="
                    w-full text-sm text-left rtl:text-right text-gray-500
                  ">
                    
                    <MediaCard data={cardData} />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
