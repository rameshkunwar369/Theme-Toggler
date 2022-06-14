import React, { useState } from "react";
import ThemeContext from "../../Context/ThemeContext";

const Provider = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Provider;
