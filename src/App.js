import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.js";
import LoginPage from "./Components/LoginPage.js"; 
import RegisterPage from "./Components/RegisterPage.js";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Nav />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
