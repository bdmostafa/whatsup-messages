import React from "react";
import { useHistory } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  document.title = "Not Found | Creative Agency";
  
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="not-match">
      <h1>404</h1>
      <p>Oops... Page Not Found!</p>
      <button onClick={goHome} variant="outline-primary">
        Go Home
      </button>
    </div>
  );
};

export default NoMatch;
