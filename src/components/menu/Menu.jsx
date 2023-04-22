import React from "react";
import "./Menu.css";

const Menu = (props) => {
  const renderWine = props.pwine.map((item) => {
    return (
      <>
        <div className="wine-item">
          <div>
            <h3>{item.name}</h3>
            <div />
            <h4>${item.price}</h4>
          </div>
          <p> {item.desc} </p>
        </div>
      </>
    );
  });

const renderCocktail = props.pcocktail.map((item) => {
    return(
        <>
          <div className="cocktail-item">
            <div>
                <h3> {item.name} </h3>
                <div />
                <h4> ${item.price} </h4>
            </div>
            <p> {item.desc} </p>
          </div>  
        </>
    )
})


  return (
    <>
      <div className="menu">
        <div className="a">
          <h1>Wine & Beer</h1>
          <div className="wine">{renderWine}</div>
        </div>


        <div className="center" >
          <h3>Menu That Fits Your Palatte</h3>
          <img className="menu-spoon" src="./images/spoon.png" alt="spoon" />
          <h1>Today's Special</h1>
          <img  className="menuimg" src="./images/menuimg.png" alt="menuimg" />
          <button>View More</button>
        </div>


        <div className="b">
          <h1>Cocktail</h1>
          <div className="cocktail"> {renderCocktail} </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
