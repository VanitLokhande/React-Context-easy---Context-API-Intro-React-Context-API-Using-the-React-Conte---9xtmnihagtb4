import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';


import React from 'react'
import '../styles/App.css';
import { useState } from "react";
import { UserProfile } from './UserProfile';
import { createContext } from "react";

const UserContext = createContext();

const App = () => {
  const[name , setname]=useState('Newton');
    const[age ,setage]=useState('3');

  return (
    <div id="main">
      <UserContext.Provider value={{name,setname,age,setage}}>
          <UserProfile />
      </UserContext.Provider>
    </div>
  )
}


export default App;
export {UserContext}
