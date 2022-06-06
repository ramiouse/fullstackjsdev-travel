import React from "react";

import ImageHero from "assets/images/hero.jpg";
import ImageHeroFrame from "assets/images/hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveller.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 555 }}>
          {/* HERO TEXT */}
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          {/* END HERO TEXT */}
          {/* HERO TEXT DESC w-75 (75 percent) */}
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family, Time to
            make another memorable moments.
          </p>
          {/* END HERO TEXT DESC */}
          {/* BUTTON SHOW ME */}
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>
          {/* END BUTTON SHOW ME */}
          {/* ICONS HERO */}
          <div className="row mt-5 icons-hero">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
          {/* END ICONS HERO */}
        </div>
      </div>
    </section>
  );
}
