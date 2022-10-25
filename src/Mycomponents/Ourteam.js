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
      <span><div className="a1" ><Cards name = 'piyush' post='ok' description='lorem ipsum'/></div></span>
      <span><div className="a2" ><Cards  name = 'piyush'/></div>
      <div className="a3" ><Cards name = 'piyush'/></div></span>
      <span><div className="a4" ><Cards name = 'piyush'/></div>
      <div className="a5" ><Cards name = 'piyush'/></div>
      <div className="a6" ><Cards name = 'piyush'/></div></span>
      {/* to add more we just create more div and then put card component in that div name, post, description also enter it during card component as prop */}
      {/* by wrapping up it in the span we can generate hirearchial structure */}

    </div>;  
    </div>
    </>
  )
}

export default Ourteam