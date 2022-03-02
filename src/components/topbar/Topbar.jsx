import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOper }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer"></div>

          <span>0012063076075</span>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOper(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
