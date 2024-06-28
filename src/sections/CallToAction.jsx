import React, { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Text from "../Text.json";
import { LangContext } from '../LangContext';

const CallToAction = () => {

  const form = useRef();
  const [input, setInput] = useState("");

  const success = () => toast("Subscribed Sucessfully.");
  const faliure = () => toast("Subscribed Sucessfully.");

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywgtkst', 'template_g5zq0pi', form.current, 'Z2qGEhfSte7EUC8t9')
      .then((result) => {
        success();
      }, (error) => {
        faliure();
      });
    setInput("")
  };
  const { language } = useContext(LangContext);
  const showText = () => {
    if(language){
      return Text.eng.CallToAction;
  }
  else{
      return Text.urd.CallToAction;
  }
  }

  return (
    <section className=" my-20 px-6 md:px-0">
      <div data-aos="fade-up" className="container bg-gradient-to-l from-blue-400 to-blue-500 md:max-w-screen-lg rounded-2xl mx-auto flex flex-col justify-center p-4 py-10 space-y-10 md:p-10 md:px-16 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left text-white">
          <h1 className="md:text-[40px] text-3xl font-bold leading-none">{showText().title1}</h1>
          <h1 className="md:text-[40px] text-3xl font-bold leading-none">{showText().title2}</h1>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <form ref={form} onSubmit={sendEmail} className="flex flex-row">
            <input name='user_email' onChange={handleInput} type="text" value={input} placeholder="example@email.com" className=" placeholder:text-gray-100 font-medium w-3/5 sm:w-80 px-3 py-4 rounded-l-lg bg-dark-btn text-gray-50 outline-none" />
            <button className="w-2/5 p-3 font-bold rounded-r-lg sm:w-1/3 bg-white">{showText().button}</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  )
}

export default CallToAction