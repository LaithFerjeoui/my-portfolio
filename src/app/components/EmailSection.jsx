"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.1,
    },
  },
};
const notify = () =>{
  toast.success('Message Sent Successfully!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}


export const EmailSection = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  notify();
  emailjs.sendForm('service_ppaiuyc', 'template_gt69pfx', form.current, 'vsQhuJwdVMI1SNi68')
    .then((result) => {
        console.log(result.text);
        form.current.user_email.value = ''; // Reset the email field
        form.current.user_subject.value = ''; // Reset the subject field
        form.current.message.value = ''; // Reset the message field
        
    }, (error) => {
        console.log(error.text);
    });
};


  return (
    <motion.section 
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
      id="EmailSection"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-10 "
    >
    <div className="gradient-02"/>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/LaithFerjeoui">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/laith-ferjeoui-22507226a/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.facebook.com/laith.ferjaoui.1/">
            <Image src={FacebookIcon} className="w-[8%] pad" alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
       
          <form className="flex flex-col" onSubmit={sendEmail} ref={form} >
            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 relative z-10"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="user_subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="user_subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 relative z-10"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 relative z-10"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              value="Send"
              
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full relative z-10"
            >
              Send Message
            </button>
            <ToastContainer/>
          </form>
      
      </div>
    </motion.section>
  );
};

export default EmailSection;
