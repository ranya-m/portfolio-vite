import React, {useState, useEffect} from 'react';
import { projectCategory } from '../../../data';
import { projects } from '../../../data';
import {motion, AnimatePresence} from 'framer-motion';
import waveLight from "../../../assets/img/wave.png";
import waveLast from "../../../assets/img/wave-last.png";


export default function Projects(props) {
    const [filterImages, setFilterImages] = useState(null);

    useEffect(() => {
        setFilterImages(projects);
    }, []);

    const handleClick = (e) => {
        let btnCategory = e.target.value;
        const newFilterImages = projects.filter(
        (project) => project.value === btnCategory);
        
        btnCategory !== 'all' 
        ? setFilterImages(newFilterImages)
        : setFilterImages(projects);
    };


  return (
    <section className='bg-gray w-full bg-opacity-10 dark:bg-mainDark relative lg:min-h-[165vh] max-h-fit'>
        <div id='projects' className='section pt-[5rem] pb-[9rem]'>
                <div className='mb-8 ml-2'>
                    <h2 className='text-[1.5rem] font-bold text-mainDark dark:text-mainLight '>
                        My projects
                    </h2>
                    <div className='w-14 h-1 rounded-sm bg-purple'></div>              
                </div>

                <div className='flex flex-wrap gap-5 justify-center'>
                    {projectCategory.map((btn) => {
                        return(
                            <button key={btn.id} value={btn.value} onClick={handleClick}
                            className='py-[0.2em] w-[80px] font-[600] text-[0.8em] text-mainLight  rounded-lg bg-mainDark bg-opacity-50 
                            hover:bg-opacity-90
                            focus:bg-opacity-90
                            focus:shadow-md

                            dark:bg-opacity-50
                            dark:bg-mainLight
                            dark:text-mainDark
                            dark:text-opacity-80
                            dark:hover:bg-opacity-100
                            dark:focus:bg-opacity-100
                            '
                            >
                                {btn.name}</button>
                        )
                    })
                    }
                </div>
                
            <AnimatePresence>
                <motion.div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                 className='grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-3 p-2 lg:mx-20 mb-8 '>
                    {filterImages && filterImages.map(filterImage=>{
                        return(
                            <motion.div
                            className='relative'
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            key={filterImage.id}
                            >
                                <div id="project">
                                    <motion.img src={filterImage.image} alt="" id="image" className='h-full object-cover cursor-pointer '/> 

                                    <div id="info" className="absolute text-sm bottom-0 ">
                                        <div className='flex justify-between'>
                                        <h4 className='bg-mainLight dark:text-mainLight border-gray border-b dark:bg-mainDark bg-opacity-80 dark:bg-opacity-80 w-full font-semibold pl-1 text-gray'>{filterImage.title}</h4>   
                                        <a target='_blank' className='bg-mainLight flex items-center px-2 h-6  font-semibold text-gray border-b  border-gray bg-opacity-80 dark:bg-mainDark dark:bg-opacity-80   hover:bg-gray hover:text-mainLight dark:hover:bg-mainLight dark:hover:text-mainDark dark:text-mainLight ' href={filterImage.link}>Visit</a>
                                        </div>
                                        <p className='bg-mainLight dark:bg-mainDark  bg-opacity-80 text-center text-gray dark:text-mainLight py-2 dark:bg-opacity-80 '>{filterImage.description}</p>
                                </div>
                                </div>
                            </motion.div>
                            
                        )
                    }
                    )}
                </motion.div>
            </AnimatePresence>

            <div className='flex justify-center'>
                <a href='https://github.com/ranya-m?tab=repositories' target='_blank' className=" mb-10 text-[0.9rem] font-semibold border-2 border-mainDark hover:border-purple rounded-xl py-2 px-4 hover:text-mainLight hover:bg-purple text-mainDark dark:text-mainLight 
                dark:text-opacity-90
                dark:border-opacity-90
                dark:border-mainLight 
                dark:hover:border-purple
                cursor-pointer">See more projects</a>
            </div>
        </div>
    
      {/* wave deco */}
      {props.darkMode ? 
      <img src={waveLast} className="w-[100%] absolute bottom-[0vh] h-[25vh] sm:h-[30vh] z-30"/>
      :
      <img src={waveLight} className="w-[120%] absolute bottom-[0vh] h-[25vh] sm:h-[25vh] z-30"/>
      }
    </section>
  )
}
