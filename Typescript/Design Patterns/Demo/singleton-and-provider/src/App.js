import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Singleton from "./pages/Singleton";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Provider from "./pages/Provider";
import TranslateSelect from "./components/TranslateSelect";

export const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#171717",
    color: "#fff",
  },
};

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");
  console.log("theme", theme)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Sidebar />
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/singleton" element={<TranslateSelect />} />
          <Route path="/provider" element={<Provider />} />
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
