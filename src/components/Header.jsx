const Header = () => {
  function changeTheme1() {
    document.getElementById("switch-btn").style.left = "5px";
    document.getElementById("theme").href = "./src/style/theme1.css";
  }
  function changeTheme2() {
    document.getElementById("switch-btn").style.left = "28px";
    document.getElementById("theme").href = "./src/style/theme2.css";
  }
  function changeTheme3() {
    document.getElementById("switch-btn").style.left = "50px";
    document.getElementById("theme").href = "./src/style/theme3.css";
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

export default Header;
