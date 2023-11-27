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
          APP
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard"> 🦾 Glad to see you again, {user.name} 🦾</Link>
                <div className={classes.menu}>
                <Link to="/qr">QR Code</Link>
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