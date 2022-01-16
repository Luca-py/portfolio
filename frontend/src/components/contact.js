import React from 'react'
import{ sendForm } from '@emailjs/browser';
import { motion } from 'framer-motion'

function Contact() {
    const send = (e) => {
        e.preventDefault();
        sendForm(
            'service_kfcgqmd', 'template_wmbmrco', e.target, 'user_jWuwhLVxUdpxzjsJ9O8TC'
            ).then(() => {
                alert('Your message has been sent!');
            }).catch(err => {
                alert('Something went wrong. Please try again.');
                console.log(err);
            });
        }

    return (
        <div className='shadow-md rounded-t-2xl bg-white p-8'>
            <p className='font-semibold text-4xl mb-2'>Contact me</p>
            <form onSubmit={send} className='flex gap-y-3 flex-col'>
                <input placeholder='Your email address' className='font-medium text-xl text-lightGray bg-darkWhite rounded-3xl p-2 max-w-xs outline-lightGray outline-none' name='name' type='email'></input>
                <div className='flex gap-3'> 
                    <input placeholder='Your message to me' className='font-medium text-xl text-lightGray bg-darkWhite rounded-3xl p-2 outline-none w-96' name='message'></input>
                    <motion.input className='bg-green text-white rounded-3xl font-medium text-xl p-2' type='submit' placeholder='Submit'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}    
                    ></motion.input>
                </div>
            </form>
        </div>
    )
}

export default Contact  