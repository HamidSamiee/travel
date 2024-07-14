
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navBar, setNavBar] = useState(false)

  return (
    
    <section className="">
        <header className="fixed top-0 flex items-center justify-center bg-[var(--WhiteColorDeam)] w-full p-4 z-10">
            <div className="shadow-input-header p-4 flex items-center justify-between w-full">
            {/* logo header */}
                <NavLink to="#" className='flex items-center justify-center text-[var(--BlackColor)] font-semibold cursor-pointer '>
                    <MdOutlineTravelExplore className='icon text-[25px] text-[var(--PrimaryColor)] translate-y-.5' /><h1 className="">Travel.</h1>
                </NavLink>
            {/* navBar header */}
               
                    
                    <div className={` flex p-4  absolute   ${navBar ? 'top-96': '-top-96'  }  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--WhiteColorDeam)] w-4/5 h-max rounded-2xl z-20 shadow-input-focus transition-all duration-300 ease-in-out`}>
                    <ul className=" flex flex-col justify-center items-center w-full m-auto py-8 ">
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Home
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Packages
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Shop
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                About
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Pages
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Newes
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='#' className='text-[var(--TextColor)]  text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Contact
                            </NavLink>
                        </li>
                        <button className="btn mt-4">
                            <NavLink to='#' className='font-semibold text-[var(--WhiteColor)]'>
                                BOOK NOW
                            </NavLink>
                        </button>
                    </ul>
                    <button onClick={()=>setNavBar(false)} className="absolute top-4 right-6 text-[var(--PrimaryColor)] hover:text-[var(--SecondaryColor)]">
                        <AiFillCloseCircle className='icon' />
                    </button>
                </div>
                
            {/* hambergerMenu */}
                <div onClick={()=>setNavBar(!navBar)} className="toogleNavbar">
                    <TbGridDots className='icon  text-[25px] text-[var(--PrimaryColor)]' />
                </div>
            </div>
        </header>
    </section>
        
  )
}

export default Navbar