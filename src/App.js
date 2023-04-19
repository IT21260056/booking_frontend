import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Home from "./pages/Home_room";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddBookingRoom from './user_booking/AddBookingRoom';
import EditBookingRoom from "./user_booking/EditBookingRoom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/user_booking" element={<AddBookingRoom/>}/>
                    <Route exact path="/edituser/:id" element={<EditBookingRoom/>}/>

                </Routes>


            </Router>


        </div>
    );
}

export default App;
