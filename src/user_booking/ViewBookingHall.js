import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import './BookingRoom.css';
import axios from "axios";

export default function ViewBookingRoom() {

    const [user1, setUser] = useState({
        name: "",
        date: "",
        time: "",
        type: "",
        participants: "",
    })

    const {id} = useParams();

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user1/${id}`)

        setUser(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user1/${id}`)
        loadUser()
    }

    // const deleteUser = async (id)=>{
    //     await axios.delete(`http://localhost:8080/user/${id}`)
    //     loadUser()
    // }

    return (
        <div>
            <div className="containerView/fluid">
                {/*<div className="row">*/}
                <div className="body2">

                    <div className="container3">

                        <div className="rec3">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">Your Details</h2>


                        <div className="card">
                            <div className="card-header">

                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b>
                                    {user1.name}
                                </li>

                                <li className="list-group-item">
                                    <b>Required Date:</b>
                                    {user1.date}
                                </li>

                                <li className="list-group-item">
                                    <b>Time:</b>
                                    {user1.time}
                                </li>

                                <li className="list-group-item">
                                    <b>Hall Type:</b>
                                    {user1.type}
                                </li>

                                <li className="list-group-item">
                                    <b>Number of Participants:</b>
                                    {user1.participants}
                                </li>

                                </ul>
                            </div>
                        </div>


                        </div>
                        <Link id="change" className="btn btn-primary my-2" to={`/edithall/${user1.id}`}>
                            Update Booking
                        </Link>

                        <Link id="cancel" className="btn btn-primary my-2"
                              onClick={() => deleteUser(user1.id)} to={"/addhall"}>
                            Cancel
                        </Link>

                        <Link id="book" className="btn btn-primary my-2" to={""}>
                            Book Now
                        </Link>


                    </div>
                </div>
            </div>
            </div>
        </div>


    );
}