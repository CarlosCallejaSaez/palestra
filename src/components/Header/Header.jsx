import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();



  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          PALESTRA GYM
        </Link>

        
        <nav>
          <ul>
          <Link to="/doc">PDF APP Documentation</Link>
          <Link to="/videodoc">Video APP Documentation</Link>
          <Link to="/chatbot">Chat Bot</Link>
         
          <Link to="/contact">Contact Us</Link>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile"> 🦾 Glad to see you again, {user.name} 🦾</Link>
                <div className={classes.menu}>
               
                <Link to="/Staff">Discover Our Staff</Link>
                <Link to="/qr">QR Code</Link>
                <Link to="/vending">Vending Machine Payment</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/rest">Rest Timer</Link>
                <Link to="/exercises">Cardio Log</Link>
                <Link to="/random">Random Exercise Table</Link>

                <Link to="/tutorial">Exercise Tutorials</Link>
                
                  <Link to="/profile">Profile</Link>

                  <a onClick={logout}>Logout</a>
                </div>
              </li>
              
            ) : (
              <Link to="/login">Login</Link>
            )}


          </ul>
        </nav>
      </div>
    </header>
  );
}
