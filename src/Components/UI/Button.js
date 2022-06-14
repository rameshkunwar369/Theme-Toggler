import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./Button.css";
const Button = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  console.log('first', darkTheme)
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
   
  };
  return (
    <div className="button-wrapper">
      <button onClick={changeTheme} className={darkTheme ? "btn-dark" : "btn-light"}>
      {darkTheme ? "Turn Off Dark Mode": "Turn On Dark Mode"}
      </button>
    </div>
  );
};

export default Button;
