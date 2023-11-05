import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.js";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        
      </div>
    </HashRouter>
  );
}

export default App;
