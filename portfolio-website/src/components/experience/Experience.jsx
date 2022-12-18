import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiWordpress,
  DiNodejsSmall,
  DiPhp,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <AiFillHtml5 className="exp__icons" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="exp__details">
              <DiCss3 className="exp__icons" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="exp__details">
              <DiJavascript1 className="exp__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="exp__details">
              <DiBootstrap className="exp__icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="exp__details">
              <SiTailwindcss className="exp__icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="exp__details">
              <DiReact className="exp__icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="exp__details">
              <DiWordpress className="exp__icons" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <DiNodejsSmall className="exp__icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="exp__details">
              <DiPhp className="exp__icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <DiMongodb className="exp__icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <DiMysql className="exp__icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FaAws className="exp__icons" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exp__details">
              <DiGit className="exp__icons" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
