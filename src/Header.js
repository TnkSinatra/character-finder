import React from "react";

function Header({ theme, toggleTheme }) {
  return (
    <header style={{ 
      backgroundColor: theme === "light" ? "#f5f5f5" : "#333", 
      color: theme === "light" ? "#333" : "#f5f5f5", 
      padding: "1rem", 
      display: "flex", 
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1>Character Finder</h1>
      <button onClick={toggleTheme} style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#f5f5f5",
        color: theme === "light" ? "#f5f5f5" : "#333",
        border: "none",
        borderRadius: "5px"
      }}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;
