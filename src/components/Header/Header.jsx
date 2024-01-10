import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedValue); 
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          PALESTRA GYM
        </Link>

        <nav>
        <span className={classes.span}>Dropdown to navigate:</span> <select
            className={`${classes.dropdown} ${selectedOption && classes.selected}`}
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="/">Home</option>
            <option value="/login">Login</option>
            <option value="/doc">PDF APP Documentation</option>
            <option value="/videodoc">Video APP Documentation</option>
            <option value="/chatbot">Chat Bot</option>
            <option value="/contact">Contact Us</option>
            <option value="/Staff">Discover Our Staff</option>
            <option value="/qr">QR Code</option>
            <option value="/vending">Vending Machine Payment</option>
            <option value="/classes">Classes</option>
            <option value="/rest">Rest Timer</option>
            <option value="/exercises">Cardio Log</option>
            <option value="/random">Random Exercise Table</option>
            <option value="/tutorial">Exercise Tutorials</option>
            <option value="/profile">Profile</option>
          </select> 

          {user && (
            <ul className={classes.menu}>
              
                  
                  <a onClick={logout}>Logout { user.name}</a>
               
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
