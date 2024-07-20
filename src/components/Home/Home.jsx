import { IoLocationOutline } from 'react-icons/io5'
import video from '../../assets/216199_tiny.mp4'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Main from '../Main/Main'

const Home = () => {

  useEffect(() => {
    Aos.init({duration:'2000'})
  }, [])
  

  return (
    <>
          <section className=" w-full relative flex justify-center mx-auto">
            <div className=" w-full    ">
              <video src={video} autoPlay muted loop type="video/mp4" className=" w-full max-h-[800px] sm:max-h-[720px] lg:max-h-[550px] top-0 object-center object-cover -z-10 "></video>
              <div className="absolute top-1 left-0 w-full max-h-[600px] sm:max-h-screen lg:max-h-[720px]  pl-6 pr-12   text-[var(--WhiteColor)] flex flex-col items-center">
                <div className=" pt-24 sm:pt-32 pb-3 sm:pb-10 font-semibold  space-y-5">
                    <span className="sm:text-[13px] uppercase ">
                      Our Packeges
                    </span>
                    <h1 data-aos='fade-up' className="relative text-[1.8rem] text-[var(--WhiteColor)] whitespace-nowrap ">
                      Search your Holiday
                    </h1>
                </div>
                <div data-aos='fade-up' data-aos-duration={3000}  className="relative pb-8  space-y-5 bg-[var(--WhiteColor)] rounded-lg p-4 w-fit sm:w-9/12 md:w-11/12 md:grid md:grid-cols-3 md:gap-5 md:place-content-center md:space-y-0 ">
                  <div className="space-y-1">
                    <label htmlFor="city" className='text-[var(--BlackColor)]'>
                        Search Your Destination:
                    </label>
                    <div className="relative flex items-center gap-x-1 w-full">
                        <input id='city' placeholder='Enter your City' type="text" className='w-full px-4 text-[var(--BlackColor)] bg-[var(--InputColor)] border border-[var(--PrimaryColor)]  rounded-3xl p-1 focus:outline-[var(--SecondaryColor)]'/>
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
                        <input id='price' min='1000' max='5000' type="range" className='w-full accent-[var(--PrimaryColor)] focus:accent-[var(--SecondaryColor)] p-2'/>
                    </div>
                  </div>

                  <div className="btn px-2 py-1 absolute -bottom-3.5 left-1/2 -translate-x-1/2  w-max  flex items-center">
                      <HiFilter className='icon text-2xl ' />
                      <span className="">More Filters</span>
                  </div>
                </div>
                <div data-aos='fade-up'  className="flex justify-between items-center w-full mt-14 sm:mt-28">
                  <div className="relative flex gap-x-3 text-xl">
                      <div className="has-tooltip">
                          <span className="tooltip text-sm text-[var(--SecondaryColor)] sm:text-white">
                              Facebook
                          </span>
                          <FiFacebook className='icon hover:text-[var(--SecondaryColor)]'/>
                      </div>
                      <div className="has-tooltip">
                          <span className="tooltip text-sm text-[var(--SecondaryColor)] sm:text-white">
                              Instagram
                          </span>
                          <AiOutlineInstagram className='icon hover:text-[var(--SecondaryColor)]'/>
                      </div>
                      <div className="has-tooltip">
                          <span className="tooltip text-sm text-[var(--SecondaryColor)] sm:text-white">
                              Tripadvisor
                          </span>
                          <FaTripadvisor className='icon hover:text-[var(--SecondaryColor)]'/>
                      </div>
                  </div>
                  <div className="relative flex gap-x-3">
                  <div className="has-tooltip">
                          <span className="tooltip text-sm text-[var(--SecondaryColor)] sm:text-white">
                              ListTask
                          </span>
                              <BsListTask className='icon hover:text-[var(--SecondaryColor)]'/>
                          </div>
                      <div className="has-tooltip">
                          <span className="tooltip text-sm text-[var(--SecondaryColor)] sm:text-white">
                              Apps
                          </span>
                              <TbApps className='icon hover:text-[var(--SecondaryColor)]'/>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Main />
    </>
    
  )
}

export default Home