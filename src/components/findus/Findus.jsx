import React from "react";
import "./Findus.css";

const Findus = () => {
  return (
    <>
      <div className="find-us">
        <div className="left">
          <h3>Contact</h3>
          <img className="findus-spoon" src="./images/spoon.png" alt="findus-spoon" />
          <h1>Find Us</h1>
          <p>Malleshwaram 3rd Block , Square Hall Lane , Banglore - 560023</p>
          <h2>Opening Hours</h2><br /><br />
          <em>Mon - Fri : 10:00am to 2:00pm</em> <br /><br />
          <em>Sat - Sun : 10:00am to 11:00pm</em>
          <br />
          <button>Visit Us</button>
        </div>
        <img className="findus-img" src="./images/findus-img.png" alt="findus-img" />
      </div>
    </>
  );
};

export default Findus;
