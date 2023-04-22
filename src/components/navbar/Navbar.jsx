import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
         <nav >
             <img src="./images/logo.png" alt="logo" />
             <div>
               <p>Home</p>
               <p>Pages</p>
               <p>Contact us</p>
               <p>Blog</p>
               <p>Landing</p>
             </div>
             <div>
               <p>Log in</p>
               <span />
               <p>Book Table</p>
             </div>
         </nav>
    </>
  )
}

export default Navbar
