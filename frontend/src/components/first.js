import React from 'react'
import first from '../pics/first.png'
import { motion } from 'framer-motion'

function First() {
    return (
        <div className=' pl-10 pr-10'>
            <motion.div className=' bg-white relative font-semibold rounded-2xl shadow-md flex justify-around items-center' variants={bgAni} initial="initial" animate="animate">
                <div className='p-7 max-w-2xl'>
                    <motion.p className="text-5xl text-orange mb-5" variants={letterAni} initial="initial" animate="animate">Hi, I'm Luca</motion.p>
                    <motion.p className='text-7xl' variants={letterAni} initial="initial" animate="animate">A self-taught web-developer</motion.p>
                </div>
                <div>
                    <motion.img src={first} alt="cooles pic" variants={picAni} initial="initial" animate="animate"/>
                </div>
            </motion.div>
        </div>
    )
}

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
    },
    transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
    },
}

const picAni = {
    initial: { x: 400 },
    animate: {
        x: 0,
    },
    transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
    },
}

const bgAni = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
    },
    transition: {
        duration: 0.8,
    },
}

export default First
