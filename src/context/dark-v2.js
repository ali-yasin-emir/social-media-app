// 1

import { createContext, useEffect, useState } from 'react';

// 2

export const DarkModeContext = createContext();

 // 3

export const DarkModeContextProvider = ({ children }) => {

 // 4

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

 // 5

  const toggle = () => {
    setDarkMode(darkMode!)
  };

 // 6

useEffect(()=>{
  localStorage.setItem('darkMode', darkMode)
}, [darkMode])

 // 7

return (
  <DarkModeContext.Provider value ={{darkMode, toggle}}>
    {children}
  </DarkModeContext.Provider>
)
};


////////////////////////////////////////////////////////////














































