import React, {useEffect, useState} from 'react'
// import './BookingRoom.css';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


export default function AddBookingRoom() {

    // const [users, setUsers]=useState([])
    // const {id} = useParams()


    // useEffect(() => {
    //     loadUsers();
    //
    // }, []);

    // const loadUsers = async () => {
    //     const result = await axios.get("http://127.0.0.1:8080/users");
    //     setUsers(result.data);
    // }

    // const loadUsers = async()=>{
    //     const result = await axios.get("http://127.0.0.1:8080/users");
    //     setUsers(result.data);
    // }

    let navigate = useNavigate()

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

    }

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:8080/user", user)
    //     navigate("/viewuser/{user.id}");

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/user", user);
        const userId = response.data.id;
        navigate(`/viewuser/${userId}`);
};

    // let selectedOption;

    // function handleOptionChange() {
    //
    // }


    return(

        <div className="container/fluid">


            <div className="body1" >

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

            <Link id="button-room" type="Submit" className="btn btn-dark btn-outline-primary" to="/">Room</Link>
            <Link id="button-hall" type="Submit" className="btn btn-dark btn-outline-primary" to="/addhall">Hall</Link>

            <h2>Rooms</h2>

            {/*<div className="container-des">*/}
            {/*    <div className="rec-r-1"></div>*/}
            {/*    <div className="rec-r-1"></div>*/}
            {/*    <div className="rec-r-1"></div>*/}

            {/*</div>*/}


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
                            <select name="type" id="t" onChange={(e) => onInputChange(e)}>
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

                    <Link id="button-1" className="btn btn-dark btn-outline-primary" to="">View room details</Link>
                    <button id="button-2" type="Submit" className="btn btn-secondary btn-outline-primary">Go to order page</button>

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
