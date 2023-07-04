import React from 'react'
import './Cards.css'
function Cards({ persons }) {
  return (
    <body>
      <div className="container-cards">
      {persons.map((person) => {
        const { id, description, name, position, img, github, linkedin, instagram } = person;
        return (
          <div className="card" key={id}>
            <div className="card1">
              <div className="card2">
                <div className="image">
                  <img src={img} alt={name} />
                </div>
                <div className="content">
                  <div className="post">
                    <h3>{position}</h3>
                  </div>
                  <div className="name">
                    <h4>{name}</h4>
                  </div>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                  <div className="links">
                    <a className='g' href={github}>Github</a>
                    <a className='l' href={linkedin}>Linkedin</a>
                    <a className='i' href={instagram}>Insta</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </body>
  )
}

export default Cards