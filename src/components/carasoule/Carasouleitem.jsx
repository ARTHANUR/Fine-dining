import React from "react";
import "./Carasoule.css";
const Carasouleitem = () => {
  return (
    <>
      <div className="chef-container">
        <img className="chef-img" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221598/chef1_isszsq.png" alt="" />
        <div className="chef-right">
          <h3>Chef's Word</h3>
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221623/spoon_bdx86r.png" className="carasoule-spoon" alt="" />
          <h1> What We Believe In </h1>
          <div>
            <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221594/colon_p5pkfj.png" className="colon" alt="" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              error iure distinctio odit natus amet voluptatibus voluptates
              architecto, tempore nobis obcaecati? Esse repellendus suscipit
              sed, ipsum dolorem laboriosam rerum similique.
            </span>
          </div>
          <h2>Kevin Lou</h2>
          <p> chef & Founder </p>
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221622/signature_i3uzze.png" className="signature" alt="" />
        </div>
      </div>
    </>
  );
};

export default Carasouleitem;
