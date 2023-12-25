import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import rocket from "../assets/logo.png";
import menu from "../assets/menu.svg";
import menu_scale from "../assets/menu-scale.svg";
import "./css/index.css";
import { navLinks } from "../data/navLinks";
import { useAnimate, stagger, motion } from "framer-motion";
import Blog from "./Blog";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer"
const Nav = () => {
  const [logo, setLogo] = useState(false);

  return (
    <>
      <div className="w-full dev">
        <nav className="nav_container">
          <div className="nav_content py-0 px-2.5 flex items-center justify-between flex-1  w-full">
            <Link to="/" className="left cursor-pointer flex items-center">
              <img src={rocket} alt="logo" width={75} height={75} />
            </Link>
            <div className="right cursor-pointer overflow-hidden">
              <motion.div className="transition-all" whileTap={{ scale: 0.97 }}>
                <img
                  onClick={() => setLogo((prev) => !prev)}
                  src={!logo ? menu : menu_scale}
                  alt="logo"
                  width={30}
                  height={30}
                />
              </motion.div>
            </div>
          </div>
        </nav>

        <div
          className={
            !logo
              ? "nav_links_container w-1/2 hidden"
              : "nav_links_container flex flex-col"
          }
        >
          <ul className="flex flex-col w-full items-center justify-center">
            {navLinks.map((items, index) => (
              <li
                onClick={() => setLogo((prev) => !prev)}
                className={
                  !logo
                    ? " w-full text-center py-4 px-4 nav_links_content cursor-pointer hidden"
                    : "  w-full text-center py-4 px-4 nav_links_content cursor-pointer flex flex-col"
                }
                key={index}
              >
                <div>
                  <a className="text-white " href={`#${items.name}`}>
                    {items.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>


        </div>
      </div>
      <Blog />
      <Skill/>
      <Project/>
      <Education/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Nav;
