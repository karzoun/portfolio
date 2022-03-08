import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="ulP">
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Desing</li>
        <li>Brabding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            className="wetherImg"
            src="https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/4:3/w_2044,h_1533,c_limit/weather.jpg"
            alt=""
          />
          <h3 className="hP">Weather App</h3>
        </div>

        <div className="item">
          <img
            className="wetherImg"
            src="https://mfallesen.github.io/plannerly/assets/images/pexels-andrea-piacquadio-842546.jpg"
            alt=""
          />
          <h3 className="hP">Weather App</h3>
        </div>
      </div>
    </div>
  );
}
