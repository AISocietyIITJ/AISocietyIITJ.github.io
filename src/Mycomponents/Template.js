import React from 'react'
import Project from './Project'
import './Template.css'
function Template(props) {
    return (
        <>
        <Project/>
        <div className='well'>
            <h1>{props.heading}</h1>
            <br />
            <h3>{props.heading2}</h3>
            <br />
            <p>{props.para1}</p>
            <br />
            <p>{props.para2}</p>
            <br />
            <span>
            <img src={props.image} alt='' srcset="" />
                <p>{props.para3}</p>
            </span>
            <br />
            <p>{props.para4}</p>
            <br />
            <div className="link">
            <a href="/">The Link of the Project video</a>   
            </div>
        </div>
        </>
    )
}

export default Template