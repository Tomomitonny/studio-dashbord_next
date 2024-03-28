import React, { useState } from "react";
import Link from 'next/link';
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar';

function InstructorCard({ data, onClick }) {
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
              <div
              className=
              {item.profilePicture === null ? 
              'bg-gray-300 w-[90px] h-[90px] rounded-full mr-6' : ''}>
            </div>
              </div>
              <div className="">
                <div className="text-xl">{item.instructorName}</div>
                <div className="mt-1">
                  {item.genres.map((genres, index) => (
                    <span key={index} className="px-3 py-0.5 mr-1 font-sm text-gray-600 bg-gray-200 rounded-full">
                      {genres}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-500">{item.selfIntro}</div>
              </div>
            </div>
          </div>
          
          <div 
            className='bg-white text-gray-600 text-base whitespace-nowrap px-4 py-2 ml-auto border border-gray-800 text-gray-800 rounded-md h-fit'
            onClick={() => onClick(item)}
          >
            View Profile
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StudioIdMedia() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const cardData = [
    {
      studioInstructorId: 'p9123890fino',
      instructorName: "Bboy Dan",
      genres: ["Breaking", "Hip Hop","House"], 
      selfIntro: 'One of the first worldwide bboys from Japan, Bboy Taisuke teaches advaned breaking.',
      profilePicture: null
    },
    {
      studioInstructorId: 'fwd98ihon',
      instructorName: 'Hozin',
      genres: ['ポップ','クランプ','リズムトレーニング'],
      selfIntro: 'I teach pop, krump, and rhythm training',
      profilePicture: null,
    },    
  ];

  return (
    <div className="relative">
      <StudioHeader />
      <StudioDashboardSidebar />
      <div className="bg-gray-100 w-full min-h-screen pb-80">
        <div className="pt-20 pl-72 pr-14">
          <div className='my-10 pl-14 py-7 bg-white flex bold text-3xl text-black'>
            Instructors
            <div className='bg-gray-800 text-white text-base px-4 py-2 ml-auto mr-20 border rounded-md'>Manage Instructors</div>
          </div>
          <div className="relative overflow-x-auto rounded-md rounded-b-none">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500">
              <InstructorCard data={cardData} onClick={handleClick} />
            </div>
          </div>
          <div className="absolute right-0 top-64">
          
          {selectedInstructor && (
            <div className="bg-white w-auto h-fit pb-8">
              <div
              className="flex mx-8 pt-10"
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
                  className="mt-10 mb-1 text-gray-500 font-bold"
                >Description
                </div>
              <div
                    className="text-sm"
                  >
                    {selectedInstructor.caption}
                  </div>
                  
                <div 
                  className='bg-white text-base w-fit mt-8 px-4 py-2 border border-gray-800 text-gray-800 rounded-md h-fit'
                >
                  Edit Profile
                </div>
                <div>
                <div
                  className="mt-10 mb-6 text-gray-500 font-bold"
                >Schedule
                </div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mb-6"
                ></div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mb-6"
                ></div>
                <div
                  className="bg-gray-300 w-[397px] h-[74px] mb-6"
                ></div>
              </div>
              <div>
                <div
                  className="mb-6 text-gray-500 font-bold"
                >Lessons</div>
                <div
                  className="flex"
                >
                <div
                  className="bg-gray-300 w-[172px] h-[197px] mr-7"
                ></div>
                <div
                  className="bg-gray-300 w-[172px] h-[197px]"
                ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
