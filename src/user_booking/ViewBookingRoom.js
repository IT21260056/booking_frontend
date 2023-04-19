import React from 'react'
import {Link} from "react-router-dom";

export default function ViewUser(){
    return (
        <div>
            <div className="container/fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Your Details</h2>

                        <div className="card">
                            <div className="card-header">
                                Details of user id:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Name:</b>
                                    </li>

                                    <li className="list-group-item">
                                        <b>Check In Date:</b>
                                    </li>

                                    <li className="list-group-item">
                                        <b>Check Out Date:</b>
                                    </li>

                                    <li className="list-group-item">
                                        <b>Room Type:</b>
                                    </li>

                                    <li className="list-group-item">
                                        <b>No Of Person:</b>
                                    </li>

                                    <li className="list-group-item">
                                        <b>No of Rooms:</b>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Update booking details
                    </Link>
                </div>
            </div>
        </div>


    );
}