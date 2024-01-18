import React,{createContext, useEffect, useState} from 'react'

export const Dev = createContext();
const Context = ({children}) => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme]   = useState("#1a1e23")
  //prevent side-effects
  
  useEffect(()=> {
     !toggle ? document.body.style.background = "#1a1e23" : document.body.style.background = "#15161d"
  },[toggle])

  return (
    <Dev.Provider  value= {{toggle, setToggle}}>
       {children}
    </Dev.Provider>
  )
}

export default Context