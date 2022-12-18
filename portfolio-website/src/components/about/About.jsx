import React from "react";
import "./about.css";
import ME from "../../assets/rohit.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about rohit image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a Web developer with over 5 years of experience in building
            mobile-first responsive, accessible, and high-performing websites. I
            have developed over 20+ websites in WordPress development
            environment from conception to deployment with experience developing
            custom themes and plugins using programming languages such as PHP,
            HTML, CSS, and JavaScript. I have experience implementing standard
            SEO practices, ADA compatibility, google analytics and creating
            marketing campaigns such as landing pages, and email marketing.
          </p>
          <p>
            I specialize in React JS framework, and have good experience
            developing SPA, React components, Forms, Events, Keys, Router,
            Animations, and Flux concepts. I have experience creating
            server-side application using Node JS, Mongo DB, and express JS.
          </p>
          <p>
            I enjoy any kind of creative expression through art, dance, music,
            and photography. I like to travel, cook, hike, and play soccer.{" "}
          </p>

          <a href="#contact-form" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
