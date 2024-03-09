import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const {id}=useParams();
    const navigate = useNavigate();
    const clickToBackHandler=()=>{
        navigate('/');
    }

    const [userField, setUserField] = useState({
        name: "",
        email: "",
        mobile: ""
    });

    useEffect(()=>{
        fetchUser();
    }, [id]);

    // useEffect(() =>{
    //     console.log(userField);
    // }, [userField]);


    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:5000/userdetails/"+id);
            //console.log(result.data);
            setUserField(result.data[0]);
        }catch(err){
            console.log("Something Wrong");
        }
    }

     const changeUserFieldHandler = (e) =>  {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);
     }

      const onSubmitChange = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://127.0.0.1:5000/userupdate/"+id, userField);
            navigate('/');
        }catch(err){
            console.log("Something Wrong");
        }
      }


    return(
        <div className='container'>
            <h1>Edit Details</h1>
            <form>
                <div className='mb-3'>
                    <label className='form-label '>ID</label>
                    <input type='text' className='form-control' id="id"  name="id" value={id} disabled/>
                </div>

                <div className='mb-3'>
                    <label className='form-label '>Name</label>
                    <input type='text' className='form-control' id="name" placeholder="Update Your Name" name="name" value={userField.name || ''}  onChange={e => changeUserFieldHandler(e)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label '>Email</label>
                    <input type='email' className='form-control' id="email" placeholder="Update Your Email" name='email' value={userField.email || ''}  onChange={e => changeUserFieldHandler(e)}/>
                </div>

                <div className='mb-3'>
                    <label className='form-label '>Mobile</label>
                    <input type='mobile' className='form-control' id="mobile" placeholder="Update Your Mobile Number" name='mobile' value={userField.mobile || ''}  onChange={e => changeUserFieldHandler(e)}/>
                </div>

                <button type='submit' className='btn btn-primary mx-2' onClick={e=>onSubmitChange(e)}>Update</button>
                <button className='btn btn-primary' onClick={clickToBackHandler}>Back</button>
            </form>

            
        </div>
    );

    
}



export default Edit;