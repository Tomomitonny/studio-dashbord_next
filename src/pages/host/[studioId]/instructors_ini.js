import React from "react";
import Link from 'next/link';
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar';

function InstructorCard({ data }) {
  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <div
          key={item.name} 
          className="flex w-[684px] h-fit border rounded-xl bg-white mr-4 mb-7 p-4 text-black items-center"
        >
          <div className="">
            <div className="flex items-center">
              <div className="">
                <div className="bg-gray-300 w-[90px] h-[90px] rounded-full mr-6"></div>
              </div>
              <div className="">
                <div className="text-xl">{item.name}</div>
                <div className="mt-1">
                  {item.genres.map((genre, index) =>import React, { useState } from "react";
import Link from 'next/link';
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar';

function InstructorCard({ data }) {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <div
          key={item.name} 
          className="flex w-[684px] h-fit border rounded-xl bg-white mr-4 mb-7 p-4 text-black items-center"
        >
          <div className="">
            <div className="flex items-center">
              <div className="">
                <div className="bg-gray-300 w-[90px] h-[90px] rounded-full mr-6"></div>
              </div>
              <div className="">
                <div className="text-xl">{item.name}</div>
                <div className="mt-1">
                  {item.genres.map((genre, index) => (
                    <span key={index} className="px-3 py-0.5 mr-1 font-sm text-gray-600 bg-gray-200 rounded-full">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-500">{item.caption}</div>
                <div className="mt-1 text-sm text-gray-500">Beginner lesson, kids lesson, College les...</div>
              </div>
            </div>
          </div>
          
          <div 
            className='bg-white text-white text-base px-4 py-2 ml-auto border border-gray-800 text-gray-800 rounded-md h-fit'
            onClick={() => handleClick(item)}
          >
            View Profile
          </div>
        </div>
      ))}
        {selectedInstructor && (
          <div
            className="absolute bg-white right-0"
          >
            <div
              className="flex"
            >
              <div>
              <div
                className="flex items-center"
              >
                <div
                  className=""
                >
                  <div
                    className="bg-gray-300 w-[90px] h-[90px] rounded-full mr-6"
                  ></div>
                </div>
                <div
                  className=""
                >
                  <div
                    className="text-xl"
                  >
                      {selectedInstructor.name}
                  </div>
                  <div
                    className="mt-1"
                  >
                    {selectedInstructor.genres.map((genre, index) => (
                      <span key={index} className="px-3 py-0.5 mr-1 font-sm text-gray-600 bg-gray-200 rounded-full">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-3 text-sm text-gray-500"
                  >
                    {selectedInstructor.caption}
                  </div>
                  <div
                    className="mt-1 text-sm text-gray-500"
                  >
                    Beginner lesson, kids lesson, College les...
                  </div>
                </div>
              </div>
              <div>
                <div 
                  className='bg-white text-base w-fit px-4 py-2 border border-gray-800 text-gray-800 rounded-md h-fit'
                >
                  Edit Profile
                </div>
                <div>
                <div
                  className=""
                >Schedule
                </div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mt-6"
                ></div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mt-6"
                ></div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mt-6"
                ></div>
              </div>
              <div>
                <div>Lessons</div>
                <div
                  className="flex"
                >
                <div
                  className="bg-gray-300 w-[172px] h-[197px] mt-2 mr-7"
                ></div>
                <div
                  className="bg-gray-300 w-[172px] h-[197px] mt-2"
                ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default function StudioIdMedia() {
  const cardData = [
    {
      name: "Bboy Dan",
      genres: ["Breaking", "Hip Hop","House"], 
      caption: "This is Dan",
    },
    {
      name: "COCO",
      genres: ["Hip Hop", "Breaking"],
      caption: "This is COCO",
    },
    {
      name: "Milk",
      genres: ["Hip Hop"],
      caption: "This is Milk",
    },
  ];

  return (
    <div className="relative">
      <StudioHeader />
      <StudioDashboardSidebar />
      <div className="bg-gray-100 w-full h-screen pb-10">
        <div className="pt-20 pl-72 pr-14">
          <div className='my-10 pl-14 py-7 bg-white flex bold text-3xl text-black'>
            Instructors
            <div className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'>Manage Instructors</div>
          </div>
          <div className="relative overflow-x-auto rounded-md rounded-b-none">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500">
              <InstructorCard data={cardData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 (
                    <span key={index} className="px-3 py-0.5 mr-1 font-sm text-gray-600 bg-gray-200 rounded-full">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-500">{item.caption}</div>
                <div className="mt-1 text-sm text-gray-500">Beginner lesson, kids lesson, College les...</div>
              </div>
            </div>
          </div>
          
          <div className='bg-white text-white text-base px-4 py-2 ml-auto border border-gray-800 text-gray-800 rounded-md h-fit'>View Profile</div>
        </div>
      ))}
    </div>
  );
}

export default function StudioIdMedia() {
  const cardData = [
    {
      name: "Bboy Dan",
      genres: ["Breaking", "Hip Hop","House"], 
      caption: "This is caption for this image",
    },
    {
      name: "Bboy Dan",
      genres: ["Hip Hop", "Breaking"],
      caption: "This is caption for this image",
    },
    {
      name: "Bboy Dan",
      genres: ["Hip Hop"],
      caption: "This is caption for this image",
    },
  ];

  return (
    <div
      className="relative">
      <StudioHeader />
      <StudioDashboardSidebar />
      <div className="bg-gray-100 w-full h-screen pb-10">
        <div className="pt-20 pl-72 pr-14">
          <div className='my-10 pl-14 py-7 bg-white flex bold text-3xl text-black'>
            Instructors
            <div className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'>Manage Instructors</div>
          </div>
          <div
            className="absolute bg-white w-[400px] h-fit min-h-80 right-0"
          >
            <div>
           Profile Description 

            </div>
            
          </div>
          <div className="relative overflow-x-auto rounded-md rounded-b-none">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500">
              <InstructorCard data={cardData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
