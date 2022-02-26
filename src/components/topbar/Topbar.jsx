import "./topbar.scss";
import "material-icons/iconfont/material-icons.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
