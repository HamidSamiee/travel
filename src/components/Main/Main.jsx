'use client'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Data from '../Main/data'
import { BsFillInfoCircleFill} from 'react-icons/bs'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  useEffect(() => {
    Aos.init({duration:'2000'})
  }, [])

  return (
    <section className="">
      <div className="">
          <h3 data-aos='fade-right' className="font-semibold my-10 text-center text-2xl">
            Most visited destinations
          </h3> 
      </div>
      <div className="grid place-content-center gap-10 sm:grid-cols-2 md:grid-cols-3">
            {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,desccription})=>
                       <div data-aos='fade-up' key={id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-stone-100">
                            <img className="w-full hover:scale-100 transition-all duration-200 ease-in-out" src={imgSrc} alt={destTitle} />
                            <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{destTitle}</div>
                              <div className="flex items-center gap-x-2 mb-3 text-gray-500">
                                <HiOutlineLocationMarker className='icon w-6' />
                                {location}
                              </div>
                              <div className="border-y-2 border-[var(--GrayText)] py-3 flex items-center justify-around">
                                <span className="">{grade}</span>
                                <span className="font-bold text-2xl">{fees}</span>
                              </div>
                              <p className="text-gray-700 text-base mt-8 text-justify line-clamp-5 overflow-hidden text-ellipsis">
                                {
                                  desccription
                                }
                              </p>
                            </div>
                            <div className="m-4 btn w-1/4 px-2 py-2  rounded-full  flex items-center justify-center gap-x-1">
                              <span className=" text-[var(--WhiteColor)] text-sm font-semibold  ">Details</span>
                              <BsFillInfoCircleFill className='icon w-4 h-4 text-[var(--WhiteColor)]' />
                            </div>
                       </div>
              )
            }
      </div>
    </section>
  )
}

export default Main