import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus">
        <img src="./images/g.png" alt="g" className="g" />
        <div className="content">
          <div>
            <h1>About Us</h1>
            <img className="spoon" src="./images/spoon.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              culpa, molestias, a minima odio quod possimus amet non voluptatem
              omnis suscipit iusto qui veritatis similique sequi exercitationem
              neque facere at.
            </p>
            <button>Know more</button>
          </div>
          <img className="knife" src="./images/knife.png" alt="" />
          <div>
            <h1>Our History</h1>
            <img src="./images/spoon.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              culpa, molestias, a minima odio quod possimus amet non voluptatem
              omnis suscipit iusto qui veritatis similique sequi exercitationem
              neque facere at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio, libero. Quod nihil vel dicta? Adipisci
              itaque dolore perspiciatis quia excepturi.
            </p>
            <button>Know more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
