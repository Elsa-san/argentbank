import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/logout'; 
import logo from "../designs/img/argentBankLogo.png"
import userCircle from "../designs/img/circle-user-solid.png"
import "../designs/css/main.css"
import logoutUser from "../designs/img/logoutUser.png"

const Header = () => {
const token = useSelector((state) => state.auth.token);
const username = useSelector((state) => state.user.username)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

    useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST', // Change the method to POST
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            dispatch({
              type: 'SET_USER',
              payload: {
                username: data.body.userName,
                firstname: data.body.firstName,
                lastname: data.body.lastName,
              },
            });
          } else {
            console.log("Erreur");
          }
        } catch (error) {
          console.log("Erreur");
        }
      };

      fetchProfile();
    }
  }, [dispatch, token]);

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
            <span className="user-header">{username}</span>
            <img src={logoutUser} className="user-icon" alt="icone de logout" />
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
