import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='all'>
      <nav>
            <div className="logo raid">Raid</div>
          <ul>
              <li><Link  to="/"><p>Home</p></Link></li>
              <li><Link  to="/About"><p> About us</p></Link></li>
              <li><Link  to="/"><p> Project</p></Link></li>
              <li><Link  to="/"><p> Our Team</p></Link></li>
          </ul>
            <div className="logo iit">IITJ</div>
      </nav>
    </div>
  )
}

export default Navbar