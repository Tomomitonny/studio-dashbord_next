export const StudioItem = ({ status, rooms, lessons, location }) => {

  return (

        <div
          className=""
        >
            <div
              className="grid grid-cols-7 py-4 min-w-fit text-left items-center text-sm border border-gray-300">
                <div
                  className="px-8 min-w-fit mx-auto">
                    <input
                      type="checkbox"></input>
                </div>
                <div
                  className="col-span-2 flex items-center">
                    <div
                      className="bg-gray-200 h-[60px] w-[120px] mr-4">

                    </div>
                    <div
                      className="">
                        Un Dance Studio
                      </div>
                </div>
                <div
                  className="font-normal text-gray-500">
                    {`${rooms} rooms`}
                </div>
                <div
                  className="font-semibold text-gray-500">
                    {`${lessons} active lessons`}
                </div>
                <div
                  className="font-semibold text-gray-900">
                    {`${location}`}
                </div>
                <div
                  className={status === 'public' ? 'w-fit px-2.5 py-1 rounded-md text-green-800 bg-green-100 font-medium text-xs' : ''}>
                    {status === 'public' ? 'Public' : ''}
                </div>
              </div>

        </div>
    
  );
};