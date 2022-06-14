import React from "react";
import Hero from "./Components/Hero/Hero";
import Button from "./Components/UI/Button";
import "./App.css";
import Provider from "./Components/Provider/Provider";
const App = () => {
  return (
    <div className="app">
      <Provider>
        <Hero />
        <Button />
      </Provider>
    </div>
  );
};

export default App;
