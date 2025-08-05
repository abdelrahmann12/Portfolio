import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else
      {document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
      
  }, [theme]);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        <span className="icon-menu"></span>
      </button>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem("currentTheme" , theme == "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("currentTheme"));
        }}
        className="moon-btn"
      >
         <span className="icon-moon-o"></span>
      </button>
      <button className="sun-btn">
        
      </button>

      {showModal && (
        <div className="sm-menu">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="close"
              >
                <span className="icon-close"></span>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
