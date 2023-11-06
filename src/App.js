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
    </div>
  );
}

export default App;
