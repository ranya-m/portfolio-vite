import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { contacts } from '../../../data';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1i31a8', 'template_7wg5zxr', form.current, 'rIOxKw1ZjmkUlGzY5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();

    alert('Your message has been sent successfully.');
  };


  return (
    <div  id="contact" className="container w-full mx-auto mb-7 px-6 text-mainDark dark:text-mainLight">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-1  rounded-sm bg-purple"></div>
      </div>
      <div className="shadow-lg p-1 rounded-lg w-[95%] mx-auto lg:w-[60%] dark:shadow-sm dark:shadow-mainLight">
        <div>
        <div className="w-full h-[3px] rounded-sm bg-purple"></div>
        </div>
        <div className="grid gap-4 pt-6">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-1 items-center flex-col" key={id}>
                <div className="text-xl hover:text-purple">{icon}</div>
                <div className="text-[0.9rem] text-center opacity-80">{text}</div>
              </div>
            );
          })}
        </div>

        <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
        <form ref={form} onSubmit={sendEmail} className="mt-8 flex gap-6 flex-wrap justify-center md:mx-auto text-center">
          <div className='w-[85%]'>
            <div className="mb-5">
              <input
              name='name'
                type="text"
                className="rounded-lg  p-2 w-[100%] md:w-[70%]  dark:bg-gray outline-none dark:bg-opacity-40  border border-solid border-gray focus:border-purple  bg-gray bg-opacity-[2%]"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
              name='email'
                type="text"
                className="rounded-lg  bg-gray outline-none dark:bg-opacity-40 p-2 w-[100%] md:w-[70%] border border-solid border-gray focus:border-purple bg-opacity-[2%]"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
              name='budget'
                type="text"
                className="rounded-lg bg-gray bg-opacity-[2%] dark:bg-gray outline-none dark:bg-opacity-40 p-2 w-[100%] md:w-[70%]  border border-solid border-gray focus:border-purple"
                placeholder="Budget"
              />
            </div>
          </div>
          <div className='w-[85%]'>
            <textarea
              name='message'
              placeholder="Project Description"
              className=" rounded-lg  border border-solid border-gray resize-none p-2 h-40 w-[100%] md:w-[70%] dark:bg-gray outline-none dark:bg-opacity-40 focus:border-purple bg-gray bg-opacity-[2%]"
            ></textarea>
            <div className=" mt-2 text-center pb-6 pt-2">
              <input type='submit' value='Send message' className="cursor-pointer text-[0.9rem] border-2 border-purple shadow-lg hover:bg-purple rounded-xl py-2 px-3 text-mainDark  dark:text-mainLight hover:text-mainLight "/>     
            </div>
          </div>
        </form>
        </div>
        
      </div>
    </div>
  )
}
