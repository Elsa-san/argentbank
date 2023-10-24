import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/logout'; 
import logo from "../designs/img/argentBankLogo.png"
import userCircle from "../designs/img/circle-user-solid.png"
import "../designs/css/main.css"


const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
        {token ? ( // if there is a token, show "Sign Out"
          <Link to="/" onClick={handleLogout} className="main-nav-item"> 
            <img src={userCircle} className="user-icon" alt="icone de profil utilisateur" />
            Sign Out
          </Link>
        ) : ( // if no token, show "Sign In"
          <Link className="main-nav-item" to="/login">
            <img src={userCircle} className="user-icon" alt="icone de profil utilisateur" />
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
