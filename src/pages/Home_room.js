import React, {useEffect, useState} from 'react'
import axios from 'axios';

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
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>user.name</td>
                                <td>user.checkInDate</td>
                                <td>user.checkOutDate</td>
                                <td>user.type</td>
                                <td>user.noOfPerson</td>
                                <td>user.noOfRooms</td>
                            </tr>

                        ))
                    }


                    </tbody>
                </table>

            </div>

        </div>
    )
}
