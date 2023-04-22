import React from "react";
import "./Gallery.css";

const Gallery = (props) => {
  const renderGallery = props.pgallery.map((item) => {
    return (
      <>
        <img className="gallery-pic" src={item.pic} alt="gallery" />
      </>
    );
  });

  return (
    <>
      <div className="gallery">
        <div className="left">
          <h3>Instagram</h3>
          <img src="./images/spoon.png" className="gallery-spoon" alt="spoon" />
          <h1>Photo Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officia minima quisquam vitae laboriosam labore repellat et nulla.
            Quasi odio saepe eaque quia, consequuntur fugiat. Ut repellat
            accusantium architecto cum ipsa consectetur aspernatur tempore
            harum.
          </p>
          <button>View More</button>
        </div>
        <div className="central-line" />
        <div className="right">
            {renderGallery}
        </div>
      </div>
    </>
  );
};

export default Gallery;
