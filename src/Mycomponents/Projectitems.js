import React from 'react'
import './Projectitem.css'
function Projectitems(props) {
  return (
    <div className='pack'>
        
            <div className="pro_image">
                <img src={props.image} alt="image of project" srcset="" />
            </div>
            <div className="pro_content">
                <h2>{props.name}</h2>
                <p>{props.content}</p>
            </div>
        
    </div>
  )
}

export default Projectitems