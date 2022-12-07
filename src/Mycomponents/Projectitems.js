import React from 'react'
import './Projectitem.css'
function Projectitems({data}) {
  const {id, image, name, content, path} = data; 
  return (
    <div className='pack'>            
            <div className="pro_image">
                <img src={image} alt={name} srcset="" />
            </div>
            <div className="pro_content">
                <h2>{name}</h2>
                <p>{content}</p>
            </div>

    </div>
  )
}

export default Projectitems