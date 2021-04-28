import React from "react";
import infoForCards from "./data/infoForCards.json";
import "./Cards.css";

const Cards = () => {
  return (
    <section>
      <div className="card-deck touristCards">
        {infoForCards.map((info, index) => (
          <div key={index} className="card text-center">
            <div
              className="card-img-top bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={info.imageSource}
                className="img-fluid"
                alt={info.imageAlt}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{info.cityName}</h5>
              <p className="card-text">{info.cityDescription}</p>
              <a href={info.website} className="btn visitButton" target="blank">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;