import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../designs/img/argentBankLogo.png"
import "../designs/css/main.css"
import userCircle from "../designs/img/circle-user-solid.png"

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
         </Link>

        <Link className="main-nav-item" to="/login">
          <img src={userCircle} className="user-icon" alt="icone de profil utilisateur" />
          Sign In
        </Link>

    </nav>
    </header>
    );
};

export default Header;