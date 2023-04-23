import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
      <div className='newsletter'>
          <h3>Newsletter</h3>
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221623/spoon_bdx86r.png" alt="" className="newsletter-spoon" />
          <h1>Subscribe To Our Newsletter</h1>
          <p>And Never Miss Any Latest Update !</p>
          <div>
              <input type="text " placeholder='Email Adress' />
              <button>Subscribe</button>
          </div>
      </div>
    </>
  )
}

export default Newsletter
