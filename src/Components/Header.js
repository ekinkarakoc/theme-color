import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      theme budur : {theme}
      <br />
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Theme i değişş
      </button>
    </div>
  );
}

export default Header;
