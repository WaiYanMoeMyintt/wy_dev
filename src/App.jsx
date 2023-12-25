import React from 'react'
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Error from "./component/Error";
import Blog from "./component/Blog";
const App = () => {
  return (
     <BrowserRouter>
        <Routes>
           <Route path='/' element = {<Nav />}>
           </Route>
           <Route path = "*" element = {<Error />}/>
           <Route path = "/blogs" element  = {<Blog />} />
        </Routes>
      
      
     </BrowserRouter>
  )
}

export default App