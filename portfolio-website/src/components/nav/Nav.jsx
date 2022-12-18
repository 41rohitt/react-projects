import { React, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";

import { BiMessageSquareDetail } from "react-icons/bi";

import { TbFileCertificate } from "react-icons/tb";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <TbFileCertificate />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact-form"
        onClick={() => setActiveNav("#contact-form")}
        className={activeNav === "#contact-form" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
