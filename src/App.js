import "./App.css";
import { MovingComponent } from "react-moving-text";
function App() {
  return (
    <div className="App">
      <MovingComponent
        type="slideInFromTop"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
        <h1>XClien</h1>
      </MovingComponent>

      <MovingComponent
        type="blur"
        duration="1000ms"
        delay="0s"
        direction="alternate"
        timing="linear"
        iteration="2"
        fillMode="none">
        <main>
          <div className="Dienst">
            <h3>Unsere Dienste :</h3>
            <ul>
              <li>Reinigung von Ferienhäusern</li>
              <li>Büroreinigung</li>
              <li>Endreinigung bei Umzügen</li>
              <li>Gebäudereinigung</li>
            </ul>
          </div>
          <div className="kontakt">
            <h4>kontakt Daten</h4>
            <ul>
              <li>
                Handynummer: <a href="tel:017640499965">017640499965</a>
              </li>
              <li>
                E-mail: <a href="mail:xclien.r@gmail.com">xclien.r@gmail.com</a>
              </li>
              <li>
                Home page: <a href="https://xclien.onrender.com/">xclien</a>
              </li>
              <li>Sitz: 24306, Plön</li>
            </ul>
          </div>
        </main>
      </MovingComponent>
    </div>
  );
}

export default App;
