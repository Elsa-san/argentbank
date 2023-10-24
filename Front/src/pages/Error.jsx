import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
      <div className="error-404-container">
        <h2 className="error-404-title">404 - Page not Found !</h2>
        <p className="error-404-text">The page you are looking for does not exist.</p>
        <Link to="/" className="error-404-link">Go back to Home Page</Link>
      </div>
    );
  };
  
  export default Error;