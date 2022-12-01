import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import './Ourteam.css'
function Ourteam() {
  return (
    <>
    <Navbar/>
    <div className="color">
    <div className="grid-container">
      <span>
        <div className="space" id='first' ><Cards name = 'Coordinator'/> <br /></div>
        <div className="space" ><Cards name = 'Coordinator'/> <br /></div>
        <div className="space" ><Cards name = 'Coordinator'/> <br /></div>
      </span>
      <span>
        <div className="space" ><Cards name = 'Elder'/> <br /></div>
        <div className="space" ><Cards name = 'Elder'/> <br /></div>
        <div className="space" ><Cards name = 'Elder'/> <br /></div>
      </span>
      <span>
        <div className="space" ><Cards name = 'Core Member'/> <br /></div>
        <div className="space" ><Cards name = 'Core Member'/> <br /></div>
        <div className="space" ><Cards name = 'Core Member'/> <br /></div>
      </span>
      {/* to add more we just create more div and then put card component in that div name, post, description also enter it during card component as prop */}
      {/* by wrapping up it in the span we can generate hirearchial structure */}

    </div>;  
    </div>
    </>
  )
}

export default Ourteam