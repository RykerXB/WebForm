import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import History from "./components/history";
import Form from "./components/form";

//import logo from "./logo.svg";
//import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://byjus.com" target="_blank">
              <img
                src="https://lh3.googleusercontent.com/OeAzVXeV2amUCyNZmD-lXXqLovbtS_J8SvsU7409SvYu6Qi-Mxvw7RAEejPy8eVs5rs=s180"
                width="40"
                height="40"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              BYJU'S
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/history" className="nav-link">
                    History
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={Form} />
          <Route path="/history" component={History} />
        </div>
      </Router>
    );
  }
}

export default App;
