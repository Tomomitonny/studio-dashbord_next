
import React, { useEffect, useState } from 'react';
import { StudioHeader } from '../../../components/StudioHeader';
import { StudioDashboardSidebar } from '../../../components/StudioDashboardSidebar'

export default function StudioIdDetails() {

  const [studioName, setStudioName] = useState("");
  const [mainPurpose, setMainPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [originalValues, setOriginalValues] = useState({
    studioName:"John’s Ballet Studio",
    mainPurpose:"Dance",
    description:"This is a studio for ballet"
  });

  useEffect(() => {
    //run
    //isEditing true 

    //CRUD
    // CREATE, READ, UPDATE DELETE

  },[isEditing])


  const handleCancel = () => {
    setStudioName(originalValues.studioName);
    setMainPurpose(originalValues.mainPurpose);
    setDescription(originalValues.description);
    setIsEditing(false);
  };

  const handleStudioNameChange = (event) => {
    setStudioName(event.target.value);
  };

  const handleMainPurposeChange = (event) => {
    setMainPurpose(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    // Here you can handle the submission, like sending the updated data to a server
    console.log("Updated values:", studioName, mainPurpose, description);
  };


  return (
    <div>
        <StudioHeader />
        <StudioDashboardSidebar /> 
      
      <div>
        <div
          className="bg-gray-100 w-full min-h-screen pb-10">

          

        <div
          className="pt-20 pl-72">       
            <div
              className='my-10 bold text-3xl text-black'>
                Studio Details
              </div>

            <form onSubmit={handleSubmit}>
                  <div className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">
                    <div className="font-semibold text-base">Property Details</div>
                    {isEditing ? (
                      <>
                        <div className="mt-6">
                          <label htmlFor="studioName" className="text-sm text-gray-600">Studio Name</label>
                          <input
                            type="text"
                            id="studioName"
                            value={studioName}
                            onChange={handleStudioNameChange}
                            className="block w-full h-10 mt-1 p-2 text-xl border rounded-xl"
                          />
                        </div>
                        <div className="mt-6">
                          <label htmlFor="mainPurpose" className="text-sm text-gray-600">Main Purpose</label>
                          <input
                            type="text"
                            id="mainPurpose"
                            value={mainPurpose}
                            onChange={handleMainPurposeChange}
                            className="block w-full h-10 mt-1 p-2 text-xl border rounded-xl"
                          />
                        </div>
                        <div className="mt-6 mb-28">
                          <label htmlFor="description" className="text-sm text-gray-600">Description</label>
                          <textarea
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="block w-full h-40 mt-1 p-2 text-xl border rounded-xl"
                          />
                        </div>
                        <button type="button" onClick={handleCancel} className="h-10 px-6 font-semibold text-base text-gray-900 absolute bottom-6 left-8 border border-gray-900 rounded">Cancel</button>
                        <button type="submit" className="h-10 px-6 font-semibold text-base text-white absolute bottom-6 right-8 bg-gray-900 rounded">Save</button>
                      </>
                    ) : (
                      <>
                    
                            <p
                              className="mt-6 text-sm text-gray-600">
                                Studio Name
                            </p>
                            <p
                              className="text-xl">
                                {studioName}
                            </p>
                            <p
                              className="mt-6 text-sm text-gray-600">
                                Main Purpose
                            </p>
                            <p
                              className="text-xl">
                                {mainPurpose}
                            </p>
                            <p
                              className="mt-6 text-sm text-gray-600">
                                Description
                            </p>
                            <p
                              className="text-xl">
                                {description}
                            </p>
                            
                      <button type="button" onClick={handleEditClick} className="font-semibold text-base text-gray-500 absolute top-6 right-8">Edit</button>
                      </>
                    )}
                  </div>
            </form>



              
            <div
              className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">

                <button
                  className="font-semibold text-base text-gray-500 absolute top-6 right-8">
                    Request to change address
                </button>
                <div
                  className="font-semibold text-base">
                    Location
                </div>
                <p
                  className="mt-6 text-sm text-gray-600">
                    Address
                </p>
                <p
                  className="text-xl">
                    Tokyo Shinjuku Sanchome 2-2-2TokyoBuilding 102
                </p>
                <div
                  className="mt-6 w-[560px] h-40 bg-gray-300">
                    
                </div>
                
                
              </div>



              
            <div
              className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">

                <button
                  className="font-semibold text-base text-gray-500 absolute top-6 right-8">
                    Edit
                </button>
                <div
                  className="font-semibold text-base">
                    Business Hour
                </div>

                <div className="grid grid-cols-3 text-base mt-7 w-[300px]">
                                    
                  <div className="item">Sunday</div>
                  <div className="item col-span-2">Closed</div>
                  
                  <div className="item">Monday</div>
                  <div className="item">9:00</div>
                  
                  <div className="item">18:00</div>
                  
                  <div className="item">Tuesday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Wednesday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Thursday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>

                  
                  <div className="item">Friday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Saturday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                </div>
                
                
              </div>



              
        
        </div>
    </div>
      </div>
      
    </div>
  );
}
