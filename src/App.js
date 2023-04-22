import React from "react";
import Aboutus from "./components/aboutus/Aboutus.jsx";
import Award from "./components/award/Award.jsx";
import AwardItem from "./components/award/AwardItem.jsx";
import Carasoule from "./components/carasoule/Carasoules.jsx";
import Contactus from "./components/contactus/Contactus.jsx";
import Findus from "./components/findus/Findus.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Heropage from "./components/heropage/Heropage.jsx";
import Menu from "./components/menu/Menu.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";

const App = () => {
  const wine = [
    {
      name: "Chapel Hill Chiraz",
      price: 36,
      desc: "AU | Bottle",
    },
    {
      name: "Catena Malbee",
      price: 59,
      desc: "AR | Bottle",
    },
    {
      name: "La Villie Rose",
      price: 69,
      desc: "FR | 750 ml",
    },
    {
      name: "Rhino Pale Ale",
      price: 99,
      desc: "CA | 750 ml",
    },
    {
      name: "Irish Guinnise",
      price: 23,
      desc: "IE | 750 ml",
    },
  ];

  const cocktail = [
    {
      name: "Aperol Spritez",
      price: 20,
      desc: "Aperol | Ville Marchesi | Soad | 30ml",
    },
    {
      name: "Dark 'N' Stormy",
      price: 50,
      desc: "Dark Rum | Ginger Bread | Slice Of Lime",
    },
    {
      name: "Daiquiri",
      price: 24,
      desc: "Rum | Citrus Juice | Sugar",
    },
    {
      name: "Old Fashioned",
      price: 33,
      desc: "Bourbone | Brown Sugar | Angostura Bitter",
    },
    {
      name: "Negroni",
      price: 82,
      desc: "Gin | Sweet vermouth | Campari | Orange Garnish",
    },
    {
      name: "Silver Bullet",
      price: 74,
      desc: "Rum | Vodka | Vanilla Essence | Flower Garnish ",
    },
    {
      name: "Blue Lagoon",
      price: 53,
      desc: "Vodka | Citrus Juice | Water Melon ",
    },
  ];

const gallery = [
  {
    pic : "./images/gallery1.png"
  },
  {
    pic : "./images/gallery2.png"
  },
  {
    pic : "./images/gallery3.png"
  },
  {
    pic : "./images/gallery4.png"
  },
  {
    pic : "./images/gallery5.png"
  },
  {
    pic : "./images/gallery6.png"
  },
]




  return (
    <div>
      <Navbar />
      <Heropage />
      <Aboutus />
      <Menu pwine={wine} pcocktail={cocktail} />
      <Carasoule />
      <Award />
      <Gallery  pgallery = {gallery} />
      <Findus />
      <Newsletter />
      <Contactus />
    </div>
  );
};

export default App;
