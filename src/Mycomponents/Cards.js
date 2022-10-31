import React from 'react'
import './Cards.css'
function Cards(props) {
  return (
    <body>
      <div className="card">
        <div className="card1">
          <div className="card2">
            <div className="image">
              <img src="" alt="picture" />
            </div>
            <div className="content">
              <div className="post">
                <h3>{props.post}</h3>
              </div>
              <div className="name">
                <h4>{props.name}</h4>
              </div>
              <div className="description">
                <p>{props.description}</p>
              </div>
              <div className="links">
                <a className='g' href='/'>github</a>
                <a className='l' href="/">Linkedin</a>
                <a className='i' href="/">Insta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Cards