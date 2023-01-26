import React from 'react'
import {generalSkills} from '../../../data';
import {AiOutlineDownCircle} from 'react-icons/ai';


export default function About() {
  return (
<section className='relative w-full'>
    <div className="section w-full pt-[3rem] pb-[6rem] dark:bg-mainDark dark:text-mainLight" id="about">
      <div className="mb-3 ml-2">
        <h2 className="text-[1.5rem] font-bold ">About me</h2>
        <div className='w-14 h-1 bg-purple rounded-full'></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {generalSkills.map((skill) => {
          return (
            <a
            target="_blank" 
            href={skill.href}
              key={skill.id}
              className={`${skill.title} flex gap-4 p-4 hover:bg-purple dark:hover:bg-mainLight hover:bg-opacity-20 dark:hover:bg-opacity-20 rounded-lg`}
            >
              <div className="text-mainDark dark:text-mainLight text-[2rem] hidden sm:block">{skill.icon}</div>
              <div>
                  <div className='flex items-center'>
                    <div className="dark:text-mainLight text-mainDark text-[2rem] block pr-2 sm:hidden">{skill.icon}</div>
                      <h3 className="text-xl">{skill.title}</h3>
                    </div>
                  <p className="opacity-80 mt-4 text-[0.9rem] text-justify">
                  {skill.text}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>

    
    <section className=" dark:bg-mainLight semicircle flex justify-center">
    <a href='#projects' className='z-10 mt-[5%] sm:mt-[3%] md:mt-[3%] lg:mt-[2%]'><AiOutlineDownCircle className='text-mainLight dark:text-mainDark  text-[80px] animate-bounce'/></a>
    </section>
 
</section>
  )
}
