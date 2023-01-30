// 1

import { createContext, useState, useEffect } from 'react';

// 2

export const AuthContext = createContext();

// 3

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  // 4

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Ali Yasin Emir',
      profilepic: 'pp.png',
    });
  };

  // 5

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={(currentUser, login)}>
      {children}
    </AuthContext.Provider>
  );
};
