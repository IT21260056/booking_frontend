import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Home from "./pages/Home_room";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddBookingRoom from './user_booking/AddBookingRoom';
import AddBookingHall from "./user_booking/AddBookingHall";
import EditBookingRoom from "./user_booking/EditBookingRoom";
import ViewBookingRoom from "./user_booking/ViewBookingRoom";




function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<AddBookingRoom/>}/>
                    <Route exact path="/addhall" element={<AddBookingHall/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    {/*<Route exact path="/user_booking" element={<AddBookingRoom/>}/>*/}
                    <Route exact path="/edituser/:id" element={<EditBookingRoom/>}/>
                    <Route exact path="/viewuser/:id" element={<ViewBookingRoom/>}/>





                </Routes>


            </Router>


        </div>
    );
}

export default App;
