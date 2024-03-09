import React, { useEffect, useState } from "react";
import {NavLink} from  'react-router-dom';
import axios from 'axios'

const List =() => {

    const [userData, setUserData] = useState([]);

    useEffect( ()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try{
            const result = await axios("http://127.0.0.1:5000/users");
             //console.log(result.data);  
             setUserData(result.data) 
        }catch (err) {
            console.log("Something Wrong!");
        }
    }

    const handleDelete = async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:5000/userdelete/"+ id);
        const newUserData = userData.filter((item)=>{
            return(
                item.id !== id
            )
        })

        setUserData(newUserData);
    }
    
    return(
        <div className="container">
            <h3>User Details</h3>
            <table className="table table-bordered table-striped" >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map((user, i) =>{
                            return(
                                <tr key={i}>
                                    <td>{i+ 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.date}</td>
                                    <td>
                                        {/* <NavLink to ={'/View/${user.id}'} className="btn btn-success mx-2">View</NavLink> */}
                                        <NavLink to ={`/Edit/${user.id}`} className="btn btn-secondary mx-2">Edit</NavLink>
                                        <button onClick={()=>handleDelete(user.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List; 