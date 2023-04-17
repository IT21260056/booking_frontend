import React from 'react'
import './BookingRoom.css';


export default function AddBooking() {


    let selectedOption;

    function handleOptionChange() {

    }

    return <div className="container/fluid">
        {/*<div className="row">*/}
        <div className="body1">

            <h1 className="welcome">Welcome!!</h1>
            <div className="rectangle">

                <div className="text">We can assist you if you need to reserve a space for an upcoming event or
                    arrange your stay with us. You will have a quick and simple booking experience with our system
                    since it is user-friendly. We appreciate you giving us some thought, and we hope to have you as
                    our guest soon!
                </div>
            </div>
        </div>

        <div className="body2">

            <div className="container1">
            <div className="rec2">
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Your name"
                        name="name"/>
                </div>


                <div className="mb-3">
                    <label htmlFor="CheckInDate" className="form-label">
                        Check In date
                    </label>

                    <input
                        type={"date"}
                        className="form-control"
                        placeholder="Check in date"
                        name="inDate"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="CheckOutDate" className="form-label">
                        Check Out date
                    </label>

                    <input
                        type={"date"}
                        className="form-control"
                        placeholder="Check out date"
                        name="outDate"/>
                </div>


                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                    Room type
                </label>
                    <select value={selectedOption} onChange={handleOptionChange}>
                        <option value="option1">Luxury</option>
                        <option value="option2">AC</option>
                        <option value="option3">Non-AC</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="No of adults" className="form-label">
                        Number of Adults
                    </label>
                    <input
                        type={"number"}
                        className="form-control"
                        placeholder="Number of person"
                        name="noOfPerson"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="No of rooms" className="form-label">
                        Number of Rooms
                    </label>
                    <input
                        type={"number"}
                        className="form-control"
                        placeholder="Number of rooms"
                        name="noOfRooms"/>
                </div>


        </div>
        </div>


    </div>
    </div>
}
