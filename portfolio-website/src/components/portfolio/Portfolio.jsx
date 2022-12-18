import React from "react";
import "./portfolio.css";
import Don from "../../assets/DonLogo.png";
import Lake from "../../assets/campusLogo.png";
import CAP from "../../assets/CAPLogo.png";
import Moby from "../../assets/moby.png";
import CTS from "../../assets/cts.png";
import ACT from "../../assets/act.png";
import GMU from "../../assets/GMULogo.jpg";
import WAU from "../../assets/WAU.png";
import Ayoub from "../../assets/ayoub.png";
import WeCare from "../../assets/weCare.png";
import GIS from "../../assets/gispi.png";
import DI from "../../assets/DI-logo.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Don} alt="Don Pollo Logo" />
          </div>
          <h3>Don Pollo</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://donpollogroup.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Lake} alt="Campus on Lake Auston logo" />
          </div>
          <h3>Campus on Lake Austin</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.campusonlakeaustin.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CAP} alt="Campus on Lake Auston logo" />
          </div>
          <h3>Coronavirus Childcare Cost Calculator (CAP)</h3>
          <small>
            Tech Stack: HTML, CSS, Materialize UI, Vanilla JavaScript
          </small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.americanprogress.org/article/cost-child-care-coronavirus-pandemic/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Moby} alt="Moby Dick Logo" />
          </div>
          <h3>Mobydick House of Kabob</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress, WooCommerce</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.mobyskabob.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={CTS}
              alt="Castera Transportation Services"
              className="cts"
            />
          </div>
          <h3>Castera Transportation Services</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://ctsdelivery.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ACT} alt="ACT I Logo" />
          </div>
          <h3>ACT I</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="http://act-i.com//"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GMU} alt="Mason Logo" />
          </div>
          <h3>ShopMason GMU</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://shopmason.gmu.edu/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WAU} alt="Washington Adventist University" />
          </div>
          <h3>Washington Adventist University</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.wau.edu/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Ayoub} alt="Ayoub N&H" />
          </div>
          <h3>Ayoub N&H</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://ayoubnh.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WeCare} alt="We Care Private Duty Services" />
          </div>
          <h3>We Care Private Duty Services</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.wecarepds.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={GIS}
              alt="Global Investigative Services"
              className="gis-logo"
            />
          </div>
          <h3>Global Investigative Services</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://gispi.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DI} alt="Digital Industry" className="gis-logo" />
          </div>
          <h3>Digital Industry</h3>
          <small>Tech Stack: HTML, CSS, PHP, WordPress</small>

          <div className="portfolio__item-cta">
            {/* <a href="" className="btn">
              GitHub
            </a> */}
            <a
              href="https://www.digitalindustry.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
