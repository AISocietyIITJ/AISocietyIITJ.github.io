import React from 'react'
import Project from './Project'
import './Template.css'
function Template({daata}) {
    const {id,heading, heading2, para1,para2,image,para3,para4,link} = daata;
    return (
        <>
        <Project/>
        <div className='well'>
            <h1>{heading}</h1>
            <br />
            <h3>{heading2}</h3>
            <br />
            <p>{para1}</p>
            <br />
            <p>{para2}</p>
            <br />
            <span>
            <img src={image} alt={id} srcset="" />
                <p>{para3}</p>
            </span>
            <br />
            <p>{para4}</p>
            <br />
            <div className="link">
            <a href={link}>The Link of the Project video</a>   
            </div>
        </div>
        </>
    )
}

export default Template