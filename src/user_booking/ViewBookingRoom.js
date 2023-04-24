import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import './BookingRoom.css';
import axios from "axios";

export default function ViewBookingRoom() {

    const [user, setUser] = useState({
        name: "",
        checkInDate: "",
        checkOutDate: "",
        type: "",
        noOfPerson: "",
        noOfRooms: "",
    })

    const {id} = useParams();

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)

        setUser(result.data)
    }

    // const deleteUser = async (id) => {
    //     await axios.delete(`http://localhost:8080/user/${id}`)
    //     loadUser()
    // }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUser()
    }

    return (
        <div>
            <div className="containerView/fluid">
                {/*<div className="row">*/}
                <div className="body2">

                    <div className="container3">

                        {/*<div className="rec3">*/}
                            {/*<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">*/}
                            {/*<h2 className="text-center m-4">Your Details</h2>*/}

                            <div className="card">
                                <div className="card-header">

                                    {/*<ul className="list-group list-group-flush">*/}
                                    <li className="list-group-item">
                                        <b>Name:</b>
                                        {user.name}
                                    </li>

                                    {/*<li className="list-group-item">*/}
                                    {/*    <b>Check In Date:</b>*/}
                                    {/*    {user.checkInDate}*/}
                                    {/*</li>*/}

                                    {/*<li className="list-group-item">*/}
                                    {/*    <b>Check Out Date:</b>*/}
                                    {/*    {user.checkOutDate}*/}
                                    {/*</li>*/}

                                    {/*<li className="list-group-item">*/}
                                    {/*    <b>Room Type:</b>*/}
                                    {/*    {user.type}*/}
                                    {/*</li>*/}

                                    {/*<li className="list-group-item">*/}
                                    {/*    <b>No Of Person:</b>*/}
                                    {/*    {user.noOfPerson}*/}
                                    {/*</li>*/}

                                    {/*<li className="list-group-item">*/}
                                    {/*    <b>No of Rooms:</b>*/}
                                    {/*    {user.noOfRooms}*/}
                                    {/*</li>*/}
                                    {/*</ul>*/}
                                </div>
                            </div>


                        {/*</div>*/}
                        <Link id="change" className="btn btn-primary my-2" to={`/edituser/${user.id}`}>
                            Update Booking
                        </Link>

                        <Link id="cancel" className="btn btn-primary my-2"
                              onClick={() => deleteUser(user.id)} to={"/"}>
                            Cancel
                        </Link>

                        <Link id="book" className="btn btn-primary my-2" to={""}>
                            Book Now
                        </Link>


                    </div>
                </div>
            </div>
            {/*</div>*/}
        </div>


    );
}