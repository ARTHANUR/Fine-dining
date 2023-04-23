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
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221629/gallery1_tfl3zs.png"
  },
  {
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221631/gallery2_xdvq13.png"
  },
  {
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221637/gallery5_rakhbw.png"
  },
  {
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221632/gallery4_ybrel2.png"
  },
  {
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682221631/gallery3_zhsloi.png"
  },
  {
    pic : "https://res.cloudinary.com/dboa7dqkl/image/upload/v1682226409/gallery7_uf7ytj.png"
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
