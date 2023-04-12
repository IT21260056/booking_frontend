import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Home from "./pages/Home_room";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Home></Home>

    </div>
  );
}

export default App;
