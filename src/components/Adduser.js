import React, { useState } from 'react';
import axios from "axios";
import Home from './Home'
import { useNavigate } from 'react-router-dom';

const Adduser = () => {

    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        name: "",
        email: "",
        mobile: ""
    });

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);
    }

    // const [loading, setLoading]=useState()

    

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try{

            const response= await axios.post("http://127.0.0.1:5000/newuser", userField);
            console.log(response)
            navigate('/');
            // setLoading(true);
        }catch(err){
            console.log("Something Wrong");
        }
        
    }

    // if(loading){
    //     return <Home/>
    // }

  

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className="col-6">
                        <h2>Add User</h2>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label '>Name</label>
                                <input type='text' className='form-control' id="name" placeholder='Enter Your Name' name='name' onChange={e => changeUserFieldHandler(e)} required/>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label '>Email</label>
                                <input type='email' className='form-control' id="email" placeholder='Enter Your Email' name='email' onChange={e => changeUserFieldHandler(e)} required/>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label '>Mobile</label>
                                <input type='mobile' className='form-control' id="mobile" placeholder='Enter Your Mobile Number' name='mobile'onChange={e => changeUserFieldHandler(e)} required/>
                            </div>

                            <button type='submit' className="btn btn-primary" onClick={e =>onSubmitChange(e)}> Add User</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Adduser;