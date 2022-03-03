import "./menu.scss";

export default function Menu({ menuOpen, setMenuOper }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOper(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOper(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOper(false)}>
          <a href="#work">Work</a>
        </li>
        <li onClick={() => setMenuOper(false)}>
          <a href="#testimonials ">Testimonials </a>
        </li>
        <li onClick={() => setMenuOper(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
