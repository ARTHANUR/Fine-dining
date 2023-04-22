import React from "react";
import "./Carasoule.css";
const Carasouleitem = () => {
  return (
    <>
      <div className="chef-container">
        <img className="chef-img" src="./images/chef1.png" alt="" />
        <div className="chef-right">
          <h3>Chef's Word</h3>
          <img src="./images/spoon.png" className="carasoule-spoon" alt="" />
          <h1> What We Believe In </h1>
          <div>
            <img src="./images/colon.png" className="colon" alt="" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              error iure distinctio odit natus amet voluptatibus voluptates
              architecto, tempore nobis obcaecati? Esse repellendus suscipit
              sed, ipsum dolorem laboriosam rerum similique.
            </span>
          </div>
          <h2>Kevin Lou</h2>
          <p> chef & Founder </p>
          <img src="./images/signature.png" className="signature" alt="" />
        </div>
      </div>
    </>
  );
};

export default Carasouleitem;
