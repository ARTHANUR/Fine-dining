import React from "react";
import "./Heropage.css"

const Heropage = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h5>Chase The New Flavour</h5>
          <img className="spoon" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221623/spoon_bdx86r.png" alt="" />
          <h1>The Key To Fine Dining</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            delectus quae sequi suscipit quidem non vel fugiat distinctio error
            tenetur molestiae voluptas quisquam earum, consectetur ipsa nulla.
            Fuga, qui nam.
          </p>
          <button>Explore Menu</button>
        </div>
        <img className="heroimg"  src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221636/heroimg_zz73k7.png" alt="heroimg" />
      </div>
    </>
  );
};

export default Heropage;
