import React from "react";
import { ReactComponent as CheckImage } from "../../../assets/images/About/check.svg";
import { ReactComponent as ClockImage } from "../../../assets/images/About/clock.svg";
import { ReactComponent as ListImage } from "../../../assets/images/About/list.svg";

import "./_about.scss";

const imageStyle = {
  width: "100%",
  height: "100%",
};

const About = () => (
  <section className="about container">
    <article className="about__article">
      <div className="about__icon">
        <CheckImage style={imageStyle} />
      </div>
      <h1 className="about__header">Lorem ipsum dolor sit amet</h1>
      <p className="about__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellat
        odio ullam unde earum nostrum eaque ab, necessitatibus alias rem aliquid
        cupiditate soluta ut, aspernatur esse recusandae dicta. A, fugit!
      </p>
    </article>
    <article className="about__article">
      <div className="about__icon">
        <ClockImage style={imageStyle} />
      </div>
      <h1 className="about__header">Lorem ipsum dolor sit amet</h1>
      <p className="about__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellat
        odio ullam unde earum nostrum eaque ab, necessitatibus alias rem aliquid
        cupiditate soluta ut, aspernatur esse recusandae dicta. A, fugit!
      </p>
    </article>
    <article className="about__article">
      <div className="about__icon">
        <ListImage style={imageStyle} />
      </div>
      <h1 className="about__header">Lorem ipsum dolor sit amet</h1>
      <p className="about__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellat
        odio ullam unde earum nostrum eaque ab, necessitatibus alias rem aliquid
        cupiditate soluta ut, aspernatur esse recusandae dicta. A, fugit!
      </p>
    </article>
  </section>
);

export default About;
