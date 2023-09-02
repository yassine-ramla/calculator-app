/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

const Header = () => {
  function changeTheme1() {
    document.getElementById("switch-btn").style.left = "5px";
    document.querySelector("body").setAttribute("theme-data", "theme1");
    localStorage.setItem("theme", "theme1");
  }
  function changeTheme2() {
    document.getElementById("switch-btn").style.left = "28px";
    document.querySelector("body").setAttribute("theme-data", "theme2");
    localStorage.setItem("theme", "theme2");
  }
  function changeTheme3() {
    document.getElementById("switch-btn").style.left = "50px";
    document.querySelector("body").setAttribute("theme-data", "theme3");
    localStorage.setItem("theme", "theme3");
  }
  return (
    <header>
      <h1 className="logo">calc</h1>
      <section className="theme">
        <h3>THEME</h3>
        <div>
          <div className="theme-nmbrs">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className="switch-btn">
            <div id="switch-btn"></div>
            <div onClick={changeTheme1} className="theme-aria"></div>
            <div onClick={changeTheme2} className="theme-aria"></div>
            <div onClick={changeTheme3} className="theme-aria"></div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default memo(Header);
