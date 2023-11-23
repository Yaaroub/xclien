import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Leistung from "./components/leistung/Leistung";
import ÜberUns from "./components/überUns/ÜberUns"
import Kontakt from "./components/kontakt/Kontakt";
import { MovingComponent } from "react-moving-text";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/leistung" element={<Leistung />}></Route>
          <Route path="/überUns" element={<ÜberUns />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
