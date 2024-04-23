import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const inputStyle="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const ContactForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
        'service_8smwpd5', 
        'template_ag0c4yr', 
        form.current, 
        'VRHOmkHq_Qbp077OC')
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 3 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 3 seconds
        }
      );
    // Clears the form after sending the email
    e.target.reset();
  };
    return (
      <>
      <div className="max-w-7xl mx-auto py-7 ">
        <h1 className="m-10 text-4xl font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-4xl lg:text-5xl">CONTACT ME</h1>
        <h1 className='mx-10 uppercase dark:text-white text-gray-900 font-semibold text-center'>
          If you are interested to hire me I am always open to new opportunities 
          and interesting projects! Feel free to contact me if you have any other 
          requests.</h1>
      </div>
      <form className="w-1/2 mx-auto py-10" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-wrap gap-3">
              <input className={inputStyle} type="text" placeholder="Name" name="user_name" />
              <input className={inputStyle}  type="email" placeholder="Email" name="user_email" />
              <textarea className={inputStyle} placeholder="Text" name="message" />
              <input className={inputStyle} type="submit" value="SEND" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </div>
      </form>
      </>
    );
  };
  export default ContactForm;