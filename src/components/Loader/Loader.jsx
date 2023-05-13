import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinnerContainer">
        <div className="spinner"></div>
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">Ticket</span>
            <span className="word">Please wait</span>
            <span className="word">Just a second</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
