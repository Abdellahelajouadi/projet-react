import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div >
       <div className="navbar"> 
        <h1>🗼Studyrama</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul></div>
   
    </div>
  );
};

export default Header;
