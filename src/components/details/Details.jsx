import { RiArrowLeftLine, RiBowlLine, RiCpuLine, RiCupLine, RiPlaneLine, RiPlantLine, RiStarFill, RiWifiLine } from '@remixicon/react'
import { useEffect, useState } from 'react';
import { CgGym } from "react-icons/cg";
import { MdOutlinePool } from "react-icons/md";
import { TbParkingCircle } from "react-icons/tb";

export default function Details({ setPopupState, data }) {
  const [HotelName, setHotelName] = useState("");
  const [Location, setLocation] = useState("");
  const [Rating, setRating] = useState("");
  const [RateCount, setRateCount] = useState("");
  const [Facilities, setFecilities] = useState([false, false, false, false, false, false, false])
  const [Description, setDiscriptiopn] = useState("");
  const [Price,setPrice] = useState("")

  useEffect(() => {
    setHotelName(data[0]);
    setLocation(data[1]);
    if (data.length > 2) {
      setRating(data[5].rating)
      setRateCount(data[5].totalReviews)
      setFecilities(data[8])
      setDiscriptiopn(data[2])
      setPrice(data[7])
    }
  }, [data])

  return (
    <div className='bg-[#191919] h-dvh w-dvw absolute top-0 left-0 z-10  ' >
      <div className='top-0 left-0 absolute m-10 cursor-pointer'>
        <button className='p-2 bg-white text-black rounded-full z-20 cursor-pointer'
          onClick={() => {
            setPopupState(true);
          }}>
          <RiArrowLeftLine />
        </button>
      </div>

      <div className='bg-amber-400 w-full h-[50%] rounded-3xl'>
        <img src={data[6]} alt="" className='h-full w-full object-cover rounded-b-3xl' />
      </div>
      <div className='p-2 '>
        <h1 className='text-4xl font-bold py-2'>
          {HotelName}
        </h1>
        <p>
          {Location}
        </p>
        <div className='p-2 flex items-center'>
          <RiStarFill className="text-yellow-400 mr-1" size={16} />
          <p>
            {Rating}
          </p>
          <p className='px-1'>
            ({RateCount} Reviews)
          </p>
        </div>

        <div className='py-2'>
          <h1 className='text-2xl font-bold'>Facilities</h1>

          <div className='flex overflow-x-scroll '>


            <div className='p-6   ' hidden={!Facilities[0]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a] w-fit'>
                  <RiWifiLine size={32} />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>WI-FI</p>
              </div>
            </div>

            <div className='p-6   ' hidden={!Facilities[1]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a] w-fit'>
                  <RiBowlLine size={32} />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Restaurant</p>
              </div>
            </div>

            <div className='p-6   ' hidden={!Facilities[2]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a]'>
                  <RiCupLine size={32} />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Cafe</p>
              </div>

            </div>

            <div className='p-6   ' hidden={!Facilities[3]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a]'>
                  <RiPlantLine size={32} />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Garden</p>
              </div>

            </div>

            <div className='p-6   ' hidden={!Facilities[4]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a]'>
                  {/* <RiWifiLine size={32} /> */}
                  <CgGym className='text-[32px]' />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Gym</p>
              </div>

            </div>

            <div className='p-6   ' hidden={!Facilities[5]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a]'>
                  {/* <RiWifiLine size={32} /> */}
                  <MdOutlinePool className='text-[32px]' />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Pool</p>
              </div>

            </div>

            <div className='p-6   ' hidden={!Facilities[6]}>
              <div className='flex justify-center pb-2'>
                <div className='p-4 rounded-full bg-[#8888882a]'>
                  <TbParkingCircle className='text-[32px]' />
                </div>
              </div>
              <div className='flex justify-center '>
                <p className='text-sm'>Parking</p>
              </div>

            </div>

          </div>
        </div>

        <div className='py-2'>
          <h1 className='text-2xl font-bold'>Description</h1>
          <p className='text-lg'>
            {Description}
          </p>
        </div>

        <div className='h-[10dvh]  '>

        </div>
        <div className='h-[10dvh] bg-[#191919] rounded-t-3xl w-full fixed bottom-0 left-0 flex justify-between p-4'>
          <div className=''>
            <p>Price</p>
            <div className='flex  items-baseline'>
              <h1 className='text-3xl font-bold'>
                ₹{Math.round(Price/30)}
              </h1>
              <p className='text-[A1A5AD]'>
                /night
              </p>
            </div>
          </div>
          <div className=' w-fit p-3 '>
            <button className='bg-[#4A75E8] py-3 rounded-full font-bold px-5'>
              Book Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
