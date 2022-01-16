import React from 'react'
import github from '../pics/github.png'
import { motion } from 'framer-motion'

function Project(props) {
    return (
        <motion.div className='shadow-md rounded-2xl bg-white w-96 h-96' whileHover={{scale: 1.1}}>
            <div style={{
                backgroundImage: `url(${props.pic})`,
                width: '384px',
                height: '160px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }} className='rounded-t-2xl'/>
            <div className='p-2'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-4xl'>{props.name}</p>
                    <a href={props.link}>
                    <img src={github} alt="github" className=' h-11'/>
                    </a>
                </div>
                <p className='font-medium text-xl max-w-xs'>{props.description}</p>
            </div>
        </motion.div>
    )
}

export default Project
