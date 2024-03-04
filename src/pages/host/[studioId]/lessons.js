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
          className="bg-white w-[519px] rounded-xl hover:bg-red-50 mr-auto mb-9 p-2 text-black flex"
          >
          <div 
          className="bg-gray-300 w-[122px] h-[122px] rounded-xl mr-3"
          ></div>
          <div 
            className="w-full max-w-[360px]"
          >

              <div 
                className="flex"
              >
            
                  <div>
                  <div 
                    className="font-medium font-semibold"
                    >
                    Lesson Title
                  </div>
                  <div 
                    className="text-gray-400 text-sm"
                    >
                      Breaking Regular Lesson
                  </div>
                  </div>
                  <div 
                    className="text-sm ml-auto"
                    >
                      ¥6000-
                  </div>
          </div>
          <div 
            className="bg-gray-100 w-auto flex p-1"
            >
          <div 
            className=""
            >
          <div 
            className=""
            >
              Oct 10,4:00pm
          </div>
          <div 
            className="pt-1 text-gray-600 text-sm"
            >
              Room102
          </div>
          </div>
          <div 
            className="text-gray-600 text-sm ml-auto pr-1"
            >
              4 upcoming classes
          </div>
          </div>
          <div 
            className="flex mt-1.5"
            >
          <div 
            className="flex items-center"
            >
          <div 
            className="bg-gray-300 w-[25px] h-[25px] rounded-full mr-2"
            ></div>
          <div 
            className="text-sm"
            >
              Bboy Instructor
          </div>
              </div>
          
          <div 
            className="w-fit ml-auto px-4 py-0.5 text-sm bg-yellow-500 text-gray-50 rounded-full"
            >
            draft
          </div>
          </div>
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
                >Lessons
                  <div
                    className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'
                    >Manage Lessons
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
