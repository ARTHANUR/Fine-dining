import React from "react";
import AwardItem from "./AwardItem";

const Award = () => {
  const award = [
    {
      award: "./images/2award.png",
      name: "Bib Gourmound",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "./images/1award.png",
      name: "Rising Star",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "./images/5award.png",
      name: "AA Hospitality",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    {
      award: "./images/3award.png",
      name: "Outstanding Chef",
      desc: " jhdbhjb sjhh jhvcgh hgehtfatje jheajh jjhbeajknke hjeahcjhevv jhdvjajhv ",
    },
    
  ];

  return (
    <>
      <div className="award">
        <img src="./images/award-logo.png" alt="" className="award-logo" />
        <div className="center">
          <h3>Awards & Recognition</h3>
          <img src="./images/spoon.png" alt="" />
          <h1>Our Laurels</h1>

          <div className="award-section">
            <AwardItem paward={award} />
          </div>
        </div>
        <img src="./images/award-img.png" alt="" className="award-img" />
      </div>
    </>
  );
};

export default Award;
