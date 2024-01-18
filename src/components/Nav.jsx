import React, { useContext } from "react";
import { Dev } from "../context/Context";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import "../css/index.css";
import title from "../assets/codepen.svg";
const Nav = () => {
  const {toggle, setToggle} = useContext(Dev);
  return (
    <nav className="flex justify-between items-center flex-1 gap-1">
      <Link to="/" className="nav_logo cursor flex gap-4 items-center">
        <img width = {40} height={40} src = {title} alt = "logo"/>
        <p>
           Miracle
        </p>
      </Link>

      <div className="nav_menu_container flex gap-6 items-center">
        <div className="nav_menu_content flex justify-between items-center gap-8">
          {navLinks.map((links, index) => (
            <div className="select-none" key={index}>
              <ul>
                <Link to={`#${links.name}`}>{links.name}</Link>
              </ul>
            </div>
          ))}
        </div>
        <div className="dark_mode cursor-pointer">
            <img onClick={()=> setToggle(prev=>!prev)} src = {!toggle ? sun : moon} alt = "toggle_icon" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
