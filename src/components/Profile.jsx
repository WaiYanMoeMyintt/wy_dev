import React from 'react'
import cover from "../assets/cover.png";
import "../css/index.css";
const Profile = () => {
  return (
    <header className="">
        <div className="header_left">
          <div></div>
            <h1>Glad to see you here, <br /> I'm WaiYan MoeMyint</h1>
            <p> I'm a passionate React developer on an exciting journey of self-study and creative exploration. With a heart fueled by innovation and a mind set on mastering the art of React, I thrive on turning ideas into interactive and dynamic experiences. Let's embark on a digital adventure where code meets creativity, and possibilities are limitless. Welcome to my portfolio – where every line of code tells a story of my commitment to continuous learning and the joy of crafting unique, user-centric solutions.</p>
        </div>
        <div className="header_right">
            <div className="cover">
                <img src = {cover} alt  = "cover"/>
            </div>
        </div>
    </header>
  )
}

export default Profile