import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";

export default function HomeHall() {

    const [users1, setUsers] = useState([])
    const {id} = useParams()

    useEffect(() => {
        loadUsers();

    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users1");
        setUsers(result.data);
    }

    const deleteUser1 = async (id) => {
        await axios.delete(`http://localhost:8080/user1/${id}`)
        loadUsers()
    }


    return (

        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Required Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Hall type</th>
                        <th scope="col">Number of participants</th>

                    </tr>
                    </thead>
                    <tbody>

                    {
                        users1.map((user1, index) => (
                            // <tr key={index+1}>
                            //     <td className={StyleSheet.hoverCol} onClick={()=>{user(user._id)}}>{user.id}</td>
                            //     <td className={StyleSheet.hoverCol} onClick={()=>{user(user._id)}}>{user.name}</td>

                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user1.name}</td>
                                <td>{user1.date}</td>
                                <td>{user1.time}</td>
                                <td>{user1.type}</td>
                                <td>{user1.participants}</td>

                                <td>
                                    <Link className="btn btn-success mx-2"
                                          to={`/viewhall/${user1.id}`}
                                    >View</Link>

                                    <Link className="btn btn-primary mx-2"
                                          to={`/edithall/${user1.id}`}
                                    >Edit</Link>

                                    <button className="btn btn-danger mx-2"

                                            onClick={() => deleteUser1(user1.id)}
                                    >Delete
                                    </button>

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
