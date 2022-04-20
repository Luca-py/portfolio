import React from 'react'
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='
        min-w-full flex flex-row justify-end gap-8 font-semibold
        text-5xl pt-10 pr-10 text-grey
        '>
            <Link to='skills' smooth={true} duration={1000}>skills</Link>
            <Link to='languages' smooth={true} duration={1000}>languages</Link>
            <Link to='projects' smooth={true} duration={1000}>projects</Link>
            <Link to='contact' smooth={true} duration={1000}>contact</Link>
        </div>
    )
}

export default Header
