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
        <div className='container_of_project_items'>
            <Link  to="/project/first"><Projectitems image={pic} name='Piyush' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'/></Link>
            <Projectitems image='hello' name='Piyush' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
            <Projectitems image='tata' name='hello' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'/>
            <Projectitems image='bye' name='amazing' content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor '/>
        </div>
        <Routes>
            <Route exact path='/project/first' element={<Template/>}/>
        </Routes>

        </>
    )
}

export default Project