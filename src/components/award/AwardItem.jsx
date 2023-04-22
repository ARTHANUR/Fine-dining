import React from "react";
import "./Award.css";

const AwardItem = (props) => {
  const renderAward = props.paward.map((item) => {
    return (
      <>
        <div className="container">
          <img src={item.award} alt="" />
          <div>
            <h1> {item.name} </h1>
            <p> {item.desc} </p>
          </div>
        </div>
      </>
    );
  });

  return <>{renderAward}</>;
};

export default AwardItem;
