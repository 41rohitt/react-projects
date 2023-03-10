import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { DiReact } from "react-icons/di";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        rohitvasu.dev
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/rohit-vasu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/41rohitt" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; rohitvasu.dev. All rights reserved. Website made with{" "}
          <b>React</b> <DiReact className="footer__icon-react" />
        </small>
      </div>
    </footer>
  );
};

export default Footer;
