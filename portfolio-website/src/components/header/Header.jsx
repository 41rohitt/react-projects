import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h6>Hello, I'm</h6>
        <h1>Rohit Vasudevamurthy</h1>
        <h5 className="text-light"> I'm a Front End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Rohit Smiling with nature on the background" />
        </div>

        <a href="#contact-form" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};
export default Header;
