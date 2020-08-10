import React, { useState } from "react";
import "./_carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const importAll = (importFun) => {
    return importFun.keys().map(importFun);
  };

  const images = importAll(
    require.context(
      "../../../assets/images/Carousel/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const slides = [
    {
      id: 0,
      header: "Stwórz swoją własną ksiązkę kulinarną !",
      message: "Twoja interaktywna lista przepisów już czeka",
    },
    {
      id: 1,
      header: "Pomidor czy malina, a może jedno i drugie?",
      message: "To ty decydujesz o swojej diecie",
    },
    {
      id: 2,
      header: "Zacznij już teraz",
      message: "Nie trać czasu, zadbaj o swoje o zdrowie",
    },
    {
      id: 3,
      header: "Wygodna i prosta obsługa z przejrzystym widokiem",
      message: "Koniec ze żmudym przeszukiwaniem tony książkowych przepisów",
    },
  ];
  const [x, setX] = useState(0);

  const slideCarousel = (direction) => {
    if (direction === "left") {
      x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
    } else if (direction === "right") {
      x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
    } else {
      throw new Error("Invalid direction");
    }
  };

  return (
    <div className="carousel">
      <button className="carousel__left" onClick={() => slideCarousel("left")}>
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="carousel__right"
        onClick={() => slideCarousel("right")}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {slides.map(({ id, header, message }) => (
        <div
          className="carousel__slide"
          key={id}
          style={{
            transform: `translateX(${x}%)`,
            backgroundImage: `url(${images[id]})`,
          }}
        >
          <div className="carousel__content">
            <h1 className="carousel__header">{header}</h1>
            <h2 className="carousel__message">{message} </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
