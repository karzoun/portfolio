import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
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
          <h3>Weather App</h3>
        </div>
      </div>
    </div>
  );
}
