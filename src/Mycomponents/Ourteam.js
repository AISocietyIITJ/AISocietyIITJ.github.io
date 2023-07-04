import React, { useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import './Ourteam.css'
import Data from '../DataOurTeam'
function Ourteam() {
  const [people, setPeople] = useState(Data);
  return (
    <>
    <Navbar/>
    <div className="color">
    <div className="grid-container">
      <Cards persons = {people}/>
    </div>;  
    </div>
    </>
  )
}

export default Ourteam