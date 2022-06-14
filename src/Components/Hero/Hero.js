import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./Hero.css";
const Hero = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`background ${
        darkTheme ? "background-dark" : "background-light"
      }`}
    >
      <h1 className={darkTheme ? "font-light": "font-dark"}>{darkTheme ? "Dark Mode On" : "Dark Mode Off"}</h1>
    </div>
  );
};

export default Hero;
