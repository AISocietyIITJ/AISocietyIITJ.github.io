import React, { useState } from 'react'
import Navbar from './Navbar'
import Projectitems from './Projectitems'
import './Project.css'
import { Link } from 'react-router-dom'
import Data from '../DataProjects';
function Project() {
    const [project, setProject] = useState(Data);
    return (
        <>
        <Navbar/>
        <span>
        <div className='container_of_project_items'>
            <Link  to="/project/zero"><Projectitems data = {project[0]} /></Link>
            <Link  to="/project/first"><Projectitems data = {project[1]} /></Link>
            <Link  to="/project/second"><Projectitems data = {project[2]} /></Link>
            <Link  to="/project/third"><Projectitems data = {project[3]}  /></Link>
            <Link  to="/project/fourth"><Projectitems data = {project[4]}  /></Link>
        </div>
        <div className="cover"></div>
        </span>
        </>
    )
}


export default Project

// how to add more projects?
// 1. Add Projectitems component in the Project.js with link. keep indexing in your mind
// 2. Go to app.js and and update the same path in root.
// 3. the Data should be updated in both DataProjects and in Data templates.