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
      {<p> <br> <br> <br> <br> <br> <br> <br><p>/* Your page content here */}
    </div>
  );
}

export default App;
