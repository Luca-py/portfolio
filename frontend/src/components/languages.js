import React from 'react'
import python from '../pics/languages/python.png'
import java from '../pics/languages/java.png'
import js from '../pics/languages/js.png'
import html from '../pics/languages/html.png'
import css from '../pics/languages/css.png'
import react from '../pics/languages/react.png'
import django from '../pics/languages/django.png'
import axios from '../pics/languages/axios.png'

function Languages() {
    return (
        <div className='shadow-md rounded-2xl bg-white flex p-5 mt-10 min-w-fit gap-7 items-center'>
            <img src={python} alt="python" className='h-24'/>
            <img src={java} alt="java" className='h-24'/>
            <img src={js} alt="javascript" className='h-24'/>
            <img src={html} alt="html" className='h-24'/>
            <img src={css} alt="css" className='h-24'/>
            <img src={react} alt="react" className='h-24'/>
            <img src={django} alt="django" className='h-24'/>
            <img src={axios} alt="axios" className='h-20'/>
        </div>
    )
}

export default Languages
