import "./topbar.scss";
// import EmailIcon from "@mui/icons-material/Email";
// import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">{/* <ContactMailIcon /> */}</div>

          <span>0012063076075</span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
