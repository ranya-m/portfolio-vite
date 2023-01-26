import React from "react";
import "./home.css";
import {motion} from "framer-motion";
import {MdOutlineWavingHand} from "react-icons/md";
import profile from "../../../assets/img/profile-square.jpg";
import waveLight from "../../../assets/img/wave.png";
import waveDark from "../../../assets/img/waveD.png";
import {codingSkills} from '../../../data';


export default function Home(props) {

return (
<section id="home" className='w-full h-[100vh] relative grid items-center justify-center bg-purple bg-opacity-40 dark:bg-opacity-50'>


<div className="md:flex items-center justify-center py-4 w-screen rounded-lg mx-2  ">

{/* CHAT BOX */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="md:w-[55%] mx-auto md:mx-0">

        <div className="flex gap-x-2 ml-2 sm:ml-0 sm:gap-x-6 items-center justify-center">
            <div className="w-[90px] sm:w-[140px] rounded-full overflow-hidden shadow-md shadow-purple md:ml-8 lg:ml-0">
              <img src={profile} alt="Profile image" className="w-full h-full object-cover"/>
            </div>

            <div className="relative flex flex-col gap-2 mr-3 sm:mr-0 mb-6 md:mb-0 text-mainDark">
              <div className="bg-mainDark bg-opacity-60 text-mainLight rounded-lg py-1 px-3 flex w-fit "> 
              <MdOutlineWavingHand className="text-xl text-mainLight text-opacity-80 mr-2"/> 
              Hello, I'm Ranya</div>

              <div className="bg-mainDark bg-opacity-60 text-mainLight  rounded-lg py-1 px-3 flex w-fit max-w-[260px] ">A FullStack Developer who loves to build aesthetic functional Websites and Apps</div>

              <div className="bg-mainDark bg-opacity-60 text-mainLight rounded-lg px-3 flex w-fit ">Find out more below !</div>
              {props.darkMode? 
                             <div className="dot-flashing-dark"></div>

              : 
              <div className="dot-flashing"></div>  
              }

            </div>        
        </div>
        
      </div>


{/* CODING ICONS  */}
      <div  
    className="mt-6 w-[250px] sm:w-[300px] grid grid-cols-3 gap-y-4 md:w-[30%] md:gap-8 md:grid md:grid-cols-3 mx-auto">
          {codingSkills.map((skill) => {
            return (
              <div
                className="flex justify-center flex-col  border-2 border-opacity-50 border-mainLight dark:border-mainDark  h-fit rounded-md w-[70px] sm:w-[80px] sm:p-2 cursor-pointer"
                key={skill.id} id={`icon${skill.id}`}
              >
                    <div className="flex flex-col text-[1.5em] font-semibold text-mainDark dark:text-mainLight dark:text-opacity-80  mt-1 mx-auto lg:text-[1.7em]">
                      {skill.icon} 
                    </div>

                    <span className="text-mainDark  dark:text-mainLight dark:text-opacity-80 font-semibold text-[0.8rem] mx-auto">
                      {skill.title}
                      </span>
              </div>
            );
          })}
      </div>

</div>


  {/* wave deco */}
  {props.darkMode ? 
      
      <img src={waveDark} className="w-[100%] absolute bottom-[-9vh] h-[32vh] sm:h-[35vh] z-30"/>
      :
      <img src={waveLight} className="w-[100%] absolute bottom-[-1vh] h-[27vh] sm:h-[25vh] z-30"/>
      }
      
  
</section>
  );
}
