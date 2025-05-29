import { RiStarFill } from '@remixicon/react';
import { useState } from 'react'

export default function OfferCard({ data,setPopupData,setPopupState }) {
  const [Ratings, setRatings] = useState(data[5].rating);
  const [DP, setDP] = useState(data[6]);
  const [Name, setName] = useState(data[0]);
  const [Location, setLocation] = useState(data[1]);
  const [Price, setPrice] = useState(data[7]);
  

  return (
    <div className="p-2 h-40 " onClick={() => {
        setPopupState(false);
        setPopupData(data);
      }}>
      <div className="p-3 rounded-md h-full w-full  backdrop-blur-sm bg-[#8f8f8f1d] cursor-pointer flex ">
        <div className='w-[40%]'>
          <div className="h-full ">
            <img src={DP} className="rounded-md h-full w-full object-cover" />
          </div>

        </div>

        <div className='p-2 w-full'>

          <div className='flex justify-between '>

            <div className="py-1 h-[30%]">
              <h1 className="font-bold ">
                {Name}
              </h1>
            </div>

            <div className=" flex items-center text-sm">
              <RiStarFill className="text-yellow-400 mr-1" size={16} />
              <p>{Ratings}</p>
            </div>

          </div>

          <div className="h-[30%] text-[12px] ">
            <p>
              {Location}
            </p>
          </div>
          <div className="h-[40%] font-bold flex items-end ">
            <p className="text-2xl ">
              ₹{Price}
            </p>
            <p className="text-md px-2 ">
              /month
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
