import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/DonLogo.png";
import IMG2 from "../../assets/act.png";
import IMG3 from "../../assets/CAPLogo.png";
import IMG4 from "../../assets/campusLogo.png";
import IMG5 from "../../assets/cts.png";
import IMG6 from "../../assets/gispi.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Don Pollo",
    github: "#",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
