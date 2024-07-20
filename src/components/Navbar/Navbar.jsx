
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navBar, setNavBar] = useState(false)

  return (
    
    <section className=" ">
        <header className="fixed top-0 left-1/2 -translate-x-1/2  bg-[var(--WhiteColorDeam)] w-full md:max-w-screen-xl p-4 z-10">
            <div className=" shadow-input-header p-4 flex items-center justify-between w-full">
            {/* logo header */}
                <NavLink to="#" className='flex items-center justify-center text-[var(--BlackColor)] font-semibold cursor-pointer '>
                    <MdOutlineTravelExplore className='icon text-[25px] text-[var(--PrimaryColor)] translate-y-.5' /><h1 className="">Travel.</h1>
                </NavLink>
            {/* navBar header */}
               
            {/* navbar mobile */}
                <div className={` flex p-4  absolute   ${navBar ? 'top-96': '-top-96'  } md:hidden left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--WhiteColorDeam)] w-4/5 h-max rounded-2xl z-20 shadow-input-focus transition-all duration-300 ease-in-out`}>
                    <ul className=" flex flex-col justify-center items-center w-full m-auto py-8 ">
                        <li className="py-4">
                            <NavLink to='/' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-7'>
                                Home
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='/packages' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Packages
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='/shop' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Shop
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='/about' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                About
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='/newes' className='text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
                                Newes
                            </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to='/contact' className='text-[var(--TextColor)]  text-sm font-semibold hover:text-[var(--PrimaryColor)]'>
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
             {/* navbar desktop */}
             <div className={`hidden md:block w-7/12`}>
                    <ul className=" flex justify-between items-center m-auto  ">
                        <li className="">
                            <NavLink to='/' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}} className={`text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/packages' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}}  className={`text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                Packages
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/shop' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}}  className={`text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/about' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}}  className={`text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                About
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/newes' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}}  className={`text-[var(--TextColor)] text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                Newes
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/contact' style={({ isActive}) => {return {color: isActive ? "hsl(187,85%,43%)" : "", borderBottomWidth:isActive && 4, borderBottomColor:isActive && "hsl(187,85%,43%)",};}}  className={`text-[var(--TextColor)]  text-sm font-semibold hover:text-[var(--PrimaryColor)] hover:border-b-4 hover:border-[var(--PrimaryColor)] pb-5 transition-all duration-300 ease-in-out`}>
                                Contact
                            </NavLink>
                        </li>
                        <button className="btn py-1">
                            <NavLink to='#' className='font-semibold text-[var(--WhiteColor)]'>
                                BOOK NOW
                            </NavLink>
                        </button>
                    </ul>
                    
                </div>    
            {/* hambergerMenu */}
                <div onClick={()=>setNavBar(!navBar)} className="toogleNavbar md:hidden">
                    <TbGridDots className='icon  text-[25px] text-[var(--PrimaryColor)]' />
                </div>
            </div>
        </header>
    </section>
        
  )
}

export default Navbar