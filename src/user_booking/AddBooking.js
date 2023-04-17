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

            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
            </div>


        </div>
    </div>
}
