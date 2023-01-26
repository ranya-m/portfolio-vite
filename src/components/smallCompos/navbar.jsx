import React, {useState} from 'react';
import { navLinks } from '../../data';
import {FaBars} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";
import logowhite from "../../assets/logo/icons8-r-key-50.png";
import logoblack from "../../assets/logo/icons8-r-key-100.png";
import NavDrop from "./NavDrop.jsx";
import {motion} from "framer-motion";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";

export default function Navbar(props) {
    const [toggle, setToggle] = useState(false);

  return (
    <div className='fixed w-full top-0 left-0 z-40 '>
        <div className='flex items-center text-mainDark justify-between py-4 pr-4 pl-1 sm:pr-8 bg-mainLight  dark:bg-mainDark dark:shadow-sm dark:shadow-gray '>
            <div className='flex gap-1'>
                <a className='pl-2 ' href='#home'>
                    {props.darkMode ? <img src={logowhite} alt="R." className='w-5'/> : <img src={logoblack} alt="R. "  className='w-5 '/> }
                    </a>
                <p className='text-m text-mainDark text-opacity-90 dark:text-mainLight'>Portfolio</p>
            </div>
            <div onClick={props.toggleDarkMode} 
             className='text-xl text-mainDark rounded-lg py-1 px-2 cursor-pointer lg:order-3'>
                {props.darkMode ? <MdOutlineLightMode className='text-mainLight  rounded-xl  hover:text-mainLight hover:scale-150'/> : <MdOutlineDarkMode className='text-mainDark hover:scale-150'/> }
                    
            </div>
            <div className='hidden md:flex items-center space-x-6 lg:space-x-8 text-m text-opacity-90 font-medium '>
                {navLinks.map(link => {
                    return(
                        <div key={link.id}>  
                            <a  className=' text-opacity-90 text-mainDark font-medium hover:bg-purple hover:text-mainLight py-2 px-4 rounded-lg dark:text-mainLight' href={link.href}>{link.text}</a>
                        </div>
                    )
                }
                )}
            </div>
            <FaBars className='md:hidden cursor-pointer mr-2 text-xl text-purple' onClick={()=> setToggle(!toggle)}/>
        </div>
        {toggle && (
            <div className="sidebar-backdrop w-full h-full bg-mainDark bg-opacity-70 fixed right-0 top-0">
                <motion.div initial={{x:400}} animate={{x:0}} className='grid items-center fixed right-0 top-0 h-screen w-[50vw] bg-mainLight'>
                <div className='flex flex-col gap-6 sm:gap-14 mx-auto '>
                {navLinks.map((link) => {
                    return <NavDrop href={link.href} key={link.id} {...link} setToggle={setToggle}
                    
                    />; 
                }
                )}
                </div>
                <FaRegWindowClose className="absolute right-4 text-2xl sm:text-3xl top-2 sm:top-6 cursor-pointer text-purple" onClick={() => setToggle(!toggle)}/>
            </motion.div>
            </div>

        )

        }

    </div>
  )
}
