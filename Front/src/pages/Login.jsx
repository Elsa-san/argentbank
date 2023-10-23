import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import userCircle from '../designs/img/circle-user-solid.png';
import { login } from '../redux/actions/login'; 

function Login() {
  const dispatch = useDispatch(); // Hook to call Redux actions
  const token = useSelector((state) => state.auth.token); // Selects the authentication token from the Redux store
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: username,
      password: password,
    };

    // call authentication action to handle connexion 
    dispatch(login(userData));
  };

  if (token) {
    navigate('/profile'); // Redirects to the dashboard if a token is present
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <img src={userCircle} className="user-icon" alt="icone de profil utilisateur" />
          <h1>Sign In</h1>
          {error && <p className="error-message">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="email"
                id="email"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">remember</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;