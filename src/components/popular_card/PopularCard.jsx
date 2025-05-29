import { RiStarFill } from "@remixicon/react";
import { useState } from "react";

export default function PopularCard({ data, setPopupState,setPopupData }) {
  const [Ratings, setRatings] = useState(data[5].rating);
  const [DP, setDP] = useState(data[6]);
  const [Name, setName] = useState(data[0]);
  const [Location, setLocation] = useState(data[1]);
  const [Price, setPrice] = useState(data[7]);


  return (
    <div className="p-2 h-full w-85 relative"
      onClick={() => {
        setPopupState(false);
        setPopupData(data);
      }}
    >
      <div className="p-3 rounded-md h-full w-full  backdrop-blur-sm bg-[#8f8f8f1d] cursor-pointer ">

        <div className="relative h-[50%]">
          <img src={DP} className="rounded-md h-full w-full object-cover" />
          <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#2929291d] px-2 py-1 m-1 rounded flex items-center text-sm">
            <RiStarFill className="text-yellow-400 mr-1" size={16} />
            <p>{Ratings}</p>
          </div>
        </div>

        <div className="">

          <div className="py-2 h-[30%]">
            <h1 className="font-bold text-xl">
              {Name}
            </h1>
          </div>

          <div className="py-2 text-md ">
            <p>
              {Location}
            </p>
          </div>

          <div className="h-[40%] font-bold flex items-end">
            <p className="text-4xl ">
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
