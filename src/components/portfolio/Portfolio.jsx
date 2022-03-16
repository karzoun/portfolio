import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web App",
    },
    {
      id: "desing",
      title: "Desing",
    },
    {
      id: "barbding",
      title: "Barbding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="ulP">
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            className="wetherImg"
            src="https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/4:3/w_2044,h_1533,c_limit/weather.jpg"
            alt=""
          />
          <h3 className="hP">Weather App</h3>
        </div>

        <div className="item">
          <img
            className="wetherImg"
            src="https://mfallesen.github.io/plannerly/assets/images/pexels-andrea-piacquadio-842546.jpg"
            alt=""
          />

          <h3 className="hP">Make my Date</h3>
        </div>
        <div className="item">
          <img
            className="wetherImg"
            src="https://pocketbutler.herokuapp.com/assets/logo.png"
            alt=""
          />

          <h3 className="hP">Pocket Butler</h3>
        </div>
        {/* <div className="item">
          <img className="wetherImg" src="" alt="" />

          <h3 className="hP">Make my Date</h3>
        </div> */}
      </div>
    </div>
  );
}
