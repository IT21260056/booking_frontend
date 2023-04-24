import React, {useEffect, useState} from 'react'
import './BookingRoom.css';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


export default function EditBookingHall() {

    let navigate = useNavigate()

    const {id}=useParams()

    const [user1, setUser] = useState({
        id:"",
        name: "",
        date: "",
        time: "",
        type: "",
        participants: "",

    })

    const {name,time,type,participants,date} = user1

    const onInputChange = (e) => {
        setUser({...user1, [e.target.name]: e.target.value})

    };

    useEffect(()=> {
        loadUser();
    },[]);

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:8080/user/${id}`, user);
    //     navigate("");
    //
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/user1", user1);
        const userId = response.data.id;
        navigate(`/viewhall/${userId}`);

    };


    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user1/${id}`)
        setUser(result.data)
    }

    // let selectedOption;

    // function handleOptionChange() {
    //
    // }


    return <div className="container/fluid">
        {/*/!*<div className="row">*!/*/}
        {/*<div className="body1">*/}

        {/*    <h1 className="welcome">Welcome!!</h1>*/}
        {/*    <div className="rectangle">*/}

        {/*        <div className="text">We can assist you if you need to reserve a space for an upcoming event or*/}
        {/*            arrange your stay with us. You will have a quick and simple booking experience with our system*/}
        {/*            since it is user-friendly. We appreciate you giving us some thought, and we hope to have you as*/}
        {/*            our guest soon!*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

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
                            <label htmlFor="date" className="form-label">
                                Required date
                            </label>

                            <input
                                type={"date"}
                                className="form-control"
                                // placeholder="Check out date"
                                name="date"
                                value={date}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">
                                Time
                            </label>

                            <input
                                type={"time"}
                                className="form-control"
                                // placeholder="Check out date"
                                name="time"
                                value={time}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Hall type
                            </label>
                            <select name="type" onChange={(e) => onInputChange(e)}>
                                <option value={type}>Luxury</option>
                                <option value="type">AC</option>
                                <option value="type">Non-AC</option>


                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="No of adults" className="form-label">
                                Number of participants
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Number of person"
                                name="participants"
                                value={participants}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        {/*<Link className="btn btn-dark btn-outline-primary" to="/">xxx</Link>*/}
                        <button type="Submit" className="btn btn-primary">Update & View</button>



                    </form>

                </div>


            </div>
        </div>
    </div>
}
