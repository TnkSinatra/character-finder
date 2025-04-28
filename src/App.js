import React, { useState } from "react";
import Header from "./Header"; // import the Header
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {
        <p>Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions. - Albert Einstein </p>
        <p><br><br><br></p>
      }
    </div>
  );
}

export default App;
