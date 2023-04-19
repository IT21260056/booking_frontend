import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

export default function Home(){

    const [users,setUsers]=useState([])
    useEffect(() => {
        loadUsers();

    },[]);
    const loadUsers=async ()=>{
        const result =await axios.get("http://127.0.0.1:8080/users");
        setUsers(result.data);
    }
    

    return (
        
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow" >
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Check in date</th>
                        <th scope="col">Check out date</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Number of person</th>
                        <th scope="col">Number of Rooms</th>

                    </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user,index)=>(
                            // <tr key={index+1}>
                            //     <td className={StyleSheet.hoverCol} onClick={()=>{user(user._id)}}>{user.id}</td>
                            //     <td className={StyleSheet.hoverCol} onClick={()=>{user(user._id)}}>{user.name}</td>

                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.checkInDate}</td>
                                <td>{user.checkOutDate}</td>
                                <td>{user.type}</td>
                                <td>{user.noOfPerson}</td>
                                <td>{user.noOfRooms}</td>

                                <td>
                                    <button className="btn btn-primary mx-2">View</button>
                                    <Link className="btn btn-outline-primary mx-2"
                                          to={`/edituser/${user.id}`}

                                    >
                                        Edit</Link>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>

                        ))
                    }


                    </tbody>
                </table>

            </div>

        </div>
    )
}
