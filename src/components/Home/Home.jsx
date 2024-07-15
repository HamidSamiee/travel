import { IoLocationOutline } from 'react-icons/io5'
import video from '../../assets/216199_tiny.mp4'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

const Home = () => {
  return (
    <section className="w-full relative flex items-center justify-center m-auto">
      <div className="absolute w-full h-full  top-0 bottom-0   ">
        <video src={video} autoPlay muted loop type="video/mp4" className="absolute w-full h-min top-0 bottom-0 object-center object-cover -z-10 "></video>
        <div className=" w-full h-full  pl-6 pr-12   text-[var(--WhiteColor)] z-10 flex flex-col items-center">
          <div className="pt-32 pb-10 font-semibold  space-y-5">
              <span className="text-[13px] uppercase ">
                Our Packeges
              </span>
              <h1 className="relative text-[1.8rem] text-[var(--WhiteColor)]  ">
                Search your Holiday
              </h1>
          </div>
          <div className="relative pb-8  space-y-5 bg-[var(--WhiteColor)] rounded-lg p-4 w-fit ">
            <div className="space-y-1">
              <label htmlFor="city" className='text-[var(--BlackColor)]'>
                  Search Your Destination:
              </label>
              <div className="relative flex items-center gap-x-1 w-full">
                  <input id='city' placeholder='Enter your City' type="text" className='px-4 text-[var(--BlackColor)] bg-[var(--InputColor)] border border-[var(--PrimaryColor)]  rounded-3xl p-1 focus:outline-[var(--SecondaryColor)]'/>
                  <IoLocationOutline className='absolute right-4 icon text-2xl text-[var(--BlackColor)]' />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="date" className='text-[var(--BlackColor)]'>
              Select Your Date:
              </label>
              <div className="flex ">
                  <input id='date' type="date"  className='w-full px-4 bg-[var(--InputColor)] rounded-3xl  text-[var(--BlackColor)]  border border-[var(--PrimaryColor)] p-1 focus:outline-[var(--SecondaryColor)]'/>
              </div>
            </div>
          
          
            <div className="space-y-1">
              <label htmlFor="price" className='flex items-center justify-between gap-x-2 text-[var(--BlackColor)]'>
                  Max Price: <h3 className="text-[var(--PrimaryColor)]">5000$</h3>  
              </label>
              <div className="flex">
                  <input id='price' min='1000' max='5000' type="range" className='w-full accent-[var(--PrimaryColor)] focus:accent-[var(--SecondaryColor)] p-1'/>
              </div>
            </div>

            <div className="btn px-2 py-1 absolute -bottom-3.5 left-1/2 -translate-x-1/2  w-max  flex items-center">
                <HiFilter className='icon text-2xl ' />
                <span className="">More Filters</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mt-32">
            <div className="relative flex gap-x-3 text-xl">
                <div className="has-tooltip">
                    <span className="tooltip text-sm">
                        Facebook
                    </span>
                    <FiFacebook className='icon hover:text-[var(--SecondaryColor)]'/>
                </div>
                <div className="has-tooltip">
                    <span className="tooltip text-sm">
                        Instagram
                    </span>
                    <AiOutlineInstagram className='icon hover:text-[var(--SecondaryColor)]'/>
                </div>
                <div className="has-tooltip">
                    <span className="tooltip text-sm">
                        Tripadvisor
                    </span>
                    <FaTripadvisor className='icon hover:text-[var(--SecondaryColor)]'/>
                </div>
            </div>
            <div className="relative flex gap-x-3">
            <div className="has-tooltip">
                    <span className="tooltip text-sm">
                        ListTask
                    </span>
                        <BsListTask className='icon hover:text-[var(--SecondaryColor)]'/>
                    </div>
                <div className="has-tooltip">
                    <span className="tooltip text-sm">
                        Apps
                    </span>
                        <TbApps className='icon hover:text-[var(--SecondaryColor)]'/>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home