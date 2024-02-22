import React from 'react';


export default function Studios() {

  return (
    <body>
      <div
        className="flex mt-36 mb-32 px-80">
        <div
          className="text-3xl font-semibold">
            Studios
        </div>
        <button
          className="ml-auto px-4 py-2 text-base bg-gray-800 text-white border rounded-md">
            Add Studio
        </button>

        </div>


        <div
          className="">
            <div
              className="grid grid-cols-7 py-4 bg-gray-50 min-w-fit text-left text-xs">
                <div
                  className="px-8 min-w-fit mx-auto">
                    <input
                      type="checkbox"></input>
                </div>
                <p
                  className="col-span-2">
                    STUDIO NAME
                </p>
                <p
                  className="">
                    ROOMS
                </p>
                <p
                  className="">
                    LESSONS
                </p>
                <p
                  className="">
                    LOCATION
                </p>
                <p
                  className="">
                    STATUS
                </p>
              </div>
        
        </div>
    </body>
  );
};
