import {React} from "react";
import HomePage from "./HomePage.js";
import SortingVisualizer from "./SortingVisualizer.js";
import Footer from "./Footer.js";
import "./navigation.css";
import logo from "../assets/joystick.png";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Navigation() {
    return (
        <Router>
        <div id ="navigations">
          <style>{'body { background-color: rgb(20, 20, 20); }'}</style>
          <img id="logo" src={logo} height={60} width={70} alt="logo"></img>
          <div id ="navigation">
                <h1 class="header"><a class = "linkName" href="/">Gaming Center</a></h1>
                    <div className='headerLinks'>
                    <Link class="link" to="/">Home</Link>
                    <Link class="link" to="/battleship">Battleship</Link>
                    <Link class="link" to="/sorting">Sorting</Link>
                    <Link class="link" to="/rps">Rock Paper Scissors</Link>
                    </div>
          </div>
        </div>
  
        <div id="content">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/sorting" element={<SortingVisualizer />}></Route>
          </Routes>
        </div>
        
        <Footer></Footer>
      </Router>
    );
}