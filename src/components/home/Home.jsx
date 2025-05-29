import { RiNotification2Fill } from "@remixicon/react"
import PopularCard from "../popular_card/PopularCard"
import { useSelector } from "react-redux"
import OfferCard from "../offer_card/OfferCard"


export default function Home({setPopupState, setPopupData}) {
    const HotelsdData = useSelector((state) => state.hotels.value)
    return (
        <div className='h-full overflow-y-scroll '>
            <div className='flex justify-between items-center py-6 px-2 '>

                <div className='flex  items-center '>
                    <div className='p-1'>
                        <img src="./user/dp.jpg" alt=""
                            className='
                        rounded-full h-12
                        '
                        />
                    </div>
                    <div className=' flex-col '>
                        <p className='text-[14px] font-semibold   '>Rakesh</p>
                        <p className='text-md font-bold '>Guptipara, Kalna, India</p>
                    </div>
                </div>

                <div className="p-3 bg-[#272727] rounded-full cursor-pointer">
                    <RiNotification2Fill size={20} />
                </div>

            </div>
            <div className="h-[40dvh]">
                <div className="p-2 font-bold h-[10%] ">
                    <h1>Popular Hotel</h1>
                </div>
                <div className="h-[90%] overflow-x-scroll flex ">
                    <div className=" flex ">
                        {
                            HotelsdData.map((hotelData, index) => {
                                return (
                                    <PopularCard key={index} data={hotelData} setPopupState={setPopupState} setPopupData={setPopupData} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className=" ">
                <div className="p-2 font-bold h-[10%] ">
                    <h1>Your Offer List</h1>
                </div>

                <div className="h-[90%]  ">
                    <div className="  overflow-y-scroll ">
                        {
                            HotelsdData.map((hotelData, index) => {
                                return (
                                    <OfferCard  key={index} data={hotelData} setPopupState={setPopupState} setPopupData={setPopupData} />
                                )
                            })
                        }
                        {/* <OfferCard/> */}
                    </div>
                </div>
            </div>


        </div>
    )
}
