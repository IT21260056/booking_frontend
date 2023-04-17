import React from 'react'
import './BookingRoom.css';





export default function AddBooking() {


    return <div className="container">
        <div className="row">
            <div className="body1">

                <h1 className="welcome">Welcome!!</h1>
                <div className="rectangle">
                    <div/>
                    <div className="text">We can assist you if you need to reserve a space for an upcoming event or
                        arrange your stay with us. You will have a quick and simple booking experience with our system
                        since it is user-friendly. We appreciate you giving us some thought, and we hope to have you as
                        our guest soon!
                    </div>
                </div>
            </div>

            <div className="body2"></div>

            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Your Name"
                    name="name"/>
            </div>

                <div className="mb-3">
                    <label htmlFor="checkInDate" className="form-label">
                        Check In date
                    </label>
                    <input
                        type={"date"}
                        className="form-control"
                        placeholder="checkInDate"
                        name="inDate"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="checkOutDate" className="form-label">
                        Check Out date
                    </label>
                    <input
                        type={"date"}
                        className="form-control"
                        placeholder="checkOutDate"
                        name="outDate"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">
                        Number of Adults
                    </label>
                    <input
                        type={"number"}
                        className="form-control"
                        placeholder="No of person"
                        name="outDate"/>
                </div>


            </div>


        </div>
    </div>
}
