import React from 'react'
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Services, Articles, Contact, Experience, Profile, Qualification, Skill} from "./components/index";
const App = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Profile />
        <Articles />
        <Qualification />
        <Skill />
        <Experience />
        <Services />
        <Contact />
    </BrowserRouter>
  )
}

export default App