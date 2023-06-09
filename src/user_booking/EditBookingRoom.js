import React, {useEffect, useState} from 'react'
import './BookingRoom.css';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


export default function EditBookingRoom() {

    let navigate = useNavigate()

    const {id}=useParams()

    const [user, setUser] = useState({
        id:"",
        name: "",
        checkInDate: "",
        checkOutDate: "",
        type: "",
        noOfPerson: "",
        noOfRooms: "",

    })

    const {name, checkInDate, checkOutDate, type, noOfPerson, noOfRooms} = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})

    };

    useEffect(()=> {
        loadUser();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("");

    };


    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    // let selectedOption;

    // function handleOptionChange() {
    //
    // }


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


                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
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
                            <label htmlFor="CheckInDate" className="form-label">
                                Check In date
                            </label>

                            <input
                                type={"date"}
                                className="form-control"
                                // placeholder="Check in date"
                                name="checkInDate"
                                // value={checkInDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="checkOutDate" className="form-label">
                                Check Out date
                            </label>

                            <input
                                type={"date"}
                                className="form-control"
                                // placeholder="Check out date"
                                name="checkOutDate"
                                value={checkOutDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Room type
                            </label>
                            <select name="type" onChange={(e) => onInputChange(e)}>
                                <option value="type">Luxury</option>
                                <option value="type">AC</option>
                                <option value="type">Non-AC</option>


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
                                name="noOfPerson"
                                value={noOfPerson}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="No of rooms" className="form-label">
                                Number of Rooms
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Number of rooms"
                                name="noOfRooms"
                                value={noOfRooms}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="btn1">

                            <Link className="btn btn-dark btn-outline-primary" to="/">xxx</Link>
                            <button type="Submit" className="btn btn-secondary btn-outline-success">Go to order page</button>


                        </div>
                    </form>

                </div>


            </div>
        </div>
    </div>
}
