import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import {FiSend } from "react-icons/fi"

import  video  from "../../assets/23334-334689196_small.mp4"
import { MdEmail, MdOutlineTravelExplore } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { FaChevronRight, FaXTwitter } from "react-icons/fa6"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:'2000'})
  }, [])

  return (
    <section className=" mt-20 w-full relative flex justify-center mx-auto text-sm sm:text-base md:text-lg">
    <div className=" w-full    ">
      <video src={video} autoPlay muted loop type="video/mp4" className=" w-full min-h-[710px] sm:min-h-[750px] lg:min-h-[300px] top-0 object-center object-cover -z-10 "></video>
      <div className="absolute top-1 md:top-1/2 md:-translate-y-[30%] left-0 w-full min-h-[750px] sm:max-h-[500px] lg:max-h-[300px]   pl-6 pr-12   text-[var(--WhiteColor)] flex flex-col items-center">
        <div className="  pb-3  font-semibold  space-y-2">
            <small className="sm:text-[13px] uppercase ">
              keep in touch
            </small>
            <h2 data-aos='fade-up' className="relative text-[1.8rem] text-[var(--WhiteColor)] whitespace-nowrap ">
              Travel with us
            </h2>
        </div>
        
          <div className=" flex flex-col gap-y-2  md:flex-row md:gap-x-4 md:items-center md:justify-center">
                <div data-aos='fade-right' className="flex flex-col items-center ">
                    <div className="relative flex items-center gap-x-1 w-full">
                        <input id='city' placeholder='Enter Email Address' type="text" className='bg-transparent outline-none px-4 text-[var(--WhiteColor)]  border-2 border-white rounded-3xl py-1  focus:border-2 focus:border-[var(--SecondaryColor)]'/>
                        <MdEmail className='absolute right-4 icon text-2xl text-[var(--WhiteColor)]' />
                    </div>
                </div>
                <button data-aos='fade-left' className=" w-full md:w-max btn flex items-center py-1.5 justify-center gap-x-2">
                  send
                  <FiSend className="w-6 md:w-8 " /> 
                </button>
          </div>
          <div  data-aos='fade-up' className="relative min-h-72 overflow-hidden mt-5 bg-[var(--WhiteColorDeam)] p-4  md:pt-0 rounded-2xl text-[var(--BlackColor)] md:grid md:grid-cols-2 md:gap-6 md:place-items-center">
            <div className="md:col-span-1">
                      {/* logo footer */}
                    <NavLink to="#" className='mb-4 flex items-center  text-[var(--BlackColor)] font-semibold cursor-pointer '>
                            <MdOutlineTravelExplore className='icon text-[25px] text-[var(--PrimaryColor)] translate-y-.5' /><h1 className="">Travel.</h1>
                    </NavLink>
                    {/* navBar footer */}
                    <p className=" text-justify">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ab error, quidem facere facilis vitae aut vel natus officiis commodi ratione.
                    </p>
                    <div className="flex items-center gap-x-5 my-3">
                      <FaXTwitter className="icon w-6 hover:text-[var(--SecondaryColor)]"/>
                      <AiFillYoutube className="icon w-6 hover:text-[var(--SecondaryColor)]"/>
                      <AiFillInstagram className="icon w-6 hover:text-[var(--SecondaryColor)]"/>
                      <FaTripadvisor className="icon w-6 hover:text-[var(--SecondaryColor)]"/>
                    </div>
            </div>
            <div className="col-span-1 mt-2 mb-10 sm:mb-8 grid gap-4 grid-cols-2 md:grid-cols-3">
              <div data-aos='fade-up' data-aos-duration={3000}  className="grid place-content-center">
                <h5 className="uppercase font-bold">our agancy</h5>
                <ul className="text-gray-500">
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Services
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Insurance
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Agency
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Tourism
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Payment
                    </span>
                  </li>
                </ul>
              </div>
              <div data-aos='fade-up' data-aos-duration={4000}  className="grid place-content-center">
                <h5 className="uppercase font-bold">Partners</h5>
                <ul className="text-gray-500">
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Bookings
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Rentcars
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      HostelWorld
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Trivago
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      TripAdvisor
                    </span>
                  </li>
                </ul>
              </div>
              <div data-aos='fade-up' data-aos-duration={5000}  className="grid place-content-center">
                <h5 className="uppercase font-bold">last minute</h5>
                <ul className="text-gray-500">
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Londan
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      California
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Indonesia
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Europe
                    </span>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[var(--SecondaryColor)]">
                    <FaChevronRight className="icon w-4 h-4"/>
                    <span className="">
                      Oceania
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full absolute md:px-4 bottom-0 left-0 text-center md:flex md:items-center md:justify-between bg-[var(--SecondaryColor)]">
                <p className="uppercase p-1">
                  best travel website
                </p>
                <p className="pb-2 md:pt-2 whitespace-nowrap text-xs sm:text-lg">
                  CopyRights Reserved (2024)- Design: Hamid Samiee
                </p>
            </div>
          </div>

        
        
      </div>
    </div>
  </section>
  )
}

export default Footer