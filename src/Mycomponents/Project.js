import React from 'react'
import Navbar from './Navbar'
import Projectitems from './Projectitems'
import './Project.css'
import pic from './Test_image.png'
import Template from './Template'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Project() {
    return (
        <>
        <Navbar/>
        <span>
        <div className='container_of_project_items'>
            <Link  to="/project/first"><Projectitems image={pic} name='Piyush' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'/></Link>
            <Link  to="/project/second"><Projectitems image='' name='Piyush' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/></Link>
            <Link  to="/project/third"><Projectitems image='' name='hello' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'/></Link>
            <Link  to="/project/fourth"><Projectitems image='' name='amazing' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor '/></Link>
            <Link  to="/project/fifth"><Projectitems image='' name='amazing' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor '/></Link>
        </div>
        <div className="cover"></div>
        </span>
        </>
    )
}

export default Project

// how to add more projects?
// 1. Add Projectitems component in the Project.js with link.
// 2. Go to app.js and and update the same path in root and make change with the help of props inside template.