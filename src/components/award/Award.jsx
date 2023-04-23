import React from "react";
import AwardItem from "./AwardItem";

const Award = () => {
  const award = [
    {
      award: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221594/2award_yqzq9c.png",
      name: "Bib Gourmound",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221574/1award_cthdaq.png",
      name: "Rising Star",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221594/5award_kmcmnf.png",
      name: "AA Hospitality",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221594/3award_vhdujt.png",
      name: "Outstanding Chef",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    
  ];

  return (
    <>
      <div className="award">
        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221595/award-logo_nm3vcp.png" alt="" className="award-logo" />
        <div className="center">
          <h3>Awards & Recognition</h3>
          <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221623/spoon_bdx86r.png" alt="" />
          <h1>Our Laurels</h1>

          <div className="award-section">
            <AwardItem paward={award} />
          </div>
        </div>
        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221603/award-img_benmnt.png" alt="" className="award-img" />
      </div>
    </>
  );
};

export default Award;
