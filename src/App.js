import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "noty/lib/noty.css";
import "noty/lib/themes/bootstrap-v4.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
