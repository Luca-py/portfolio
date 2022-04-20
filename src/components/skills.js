import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Skills(props) {
    const [ref, inView] = useInView({threshold: 0.05});
    const animation = useAnimation();
    useEffect(() => {
        if(inView){
            console.log('inView');
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,

                },
            });
        }
        if (!inView) {
            console.log('not inView');
            animation.start({
                opacity: 0,
                y: 50,
                transition: {
                    duration: 0,
                },
            });
        }
    }, [inView]);

    return (
        <motion.div {...props} className={`max-w-xl shadow-md rounded-2xl text-center p-5 text-white ${props.color}`}
         ref={ref} animate={animation} whileHover={{scale: 1.05}}
        >
            <div className='min-w-full justify-center flex h-72 mb-2'>
                <img src={props.pic} alt="cooles pic"/>
            </div>
            <div>
                <p className='font-semibold text-4xl'>{props.header}</p>
            </div>
            <div>
                <p className='text-3xl'>{props.text}</p>
            </div>
        </motion.div>
    )
}

export default Skills
