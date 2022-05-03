import React, {useState} from 'react';
import './static/css/bootstrap.css';
import './static/js/bootstrap.bundle'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import ErrorPage from "./pages/ErrorPage";
import Translate from "./pages/translate";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Babylon Station</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Home"? "active": "")}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "About"? "active": "")}`} href="/about">About</a>
              </li>
              <li className="nav-item">
              <a className={`nav-link ${(currentPage === "Translate"? "active": "")}`} href="/translate">Translate</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Account"? "active": "")}`} href="/account">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home setCurrentPage={setCurrentPage}/>}/>
          <Route path='/about' element={<About setCurrentPage={setCurrentPage}/>}/>
          <Route path='/account' element={<Profile setCurrentPage={setCurrentPage}/>}/>
          <Route path='/translate' element={<Translate setCurrentPage={setCurrentPage}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}
