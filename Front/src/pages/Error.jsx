import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
      <div className="error-404-container">
        <h2 className="error-404-title">404 - Page non trouvée !</h2>
        <p className="error-404-text">La page que vous recherchez n'existe pas</p>
        <Link to="/" className="error-404-link">Retourner à la page d'accueil</Link>
      </div>
    );
  };
  
  export default Error;