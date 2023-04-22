import React, {useState} from 'react'
// import './BookingRoom.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


export default function AddBookingRoom() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        date:"",
        time:"",
        type:"",
        participants:"",

    })

   const {name,date,time,type,participants }=user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user1", user)
        navigate("/")

    };

    // let selectedOption;

    // function handleOptionChange() {
    //
    // }


    return(
        <div className="container/fluid">
            {/*<div className="row">*/}
            {/*    <img src="assert/images/room1_backgropund.jpg"/>*/}

            <div className="bodyHall1" >

                <h1 className="welcome">Welcome!!</h1>
                <div className="rectangle">

                    <div className="text">We can assist you if you need to reserve a space for an upcoming event or
                        arrange your stay with us. You will have a quick and simple booking experience with our system
                        since it is user-friendly. We appreciate you giving us some thought, and we hope to have you as
                        our guest soon!
                    </div>
                </div>
            </div>

            <div className="bodyHall2">

                <Link id="button-room" type="Submit" className="btn btn-dark btn-outline-primary" to="/">Room</Link>
                <Link id="button-hall" type="Submit" className="btn btn-dark btn-outline-primary" to="/addhall">Hall</Link>

                <h2>Available Halls</h2>

                <div className="container1">

                    <div className="rec2">


                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Customer Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Your name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="Date" className="form-label">
                                    Date Required
                                </label>

                                <input
                                    type={"date"}
                                    className="form-control"
                                    name="date"
                                    value={date}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="CheckInDate" className="form-label">
                                    Time Required
                                </label>

                                <input
                                    type={"time"}
                                    className="form-control"
                                    name="time"
                                    value={time}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">
                                    Venue
                                </label>
                                <select name="type" onChange={(e) => onInputChange(e)}>
                                    <option value={type}>Asvter Banquet Hall</option>
                                    <option value={type}>The Green Banquets</option>
                                    <option value={type}>KNIGHTSBRIDGE</option>
                                    <option value={type}>Hummingbird Hall</option>


                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Par" className="form-label">
                                    Number of Participants
                                </label>
                                <input
                                    type={"number"}
                                    className="form-control"
                                    placeholder="Parcitipants"
                                    name="parcitipants"
                                    value={participants}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            <div className="btn1">


                                <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/edituser">View Hall details</Link>
                                <button id="button-2" type="Submit" className="btn btn-secondary btn-outline-success">Go to order page</button>

                            </div>
                        </form>

                    </div>


                </div>
            </div>

            <div id="footer-row-1">
                footer1
            </div>

            <div id="footer-row-2">
                footer2
            </div>



        </div>
    )
}
