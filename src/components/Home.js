import React, {  } from 'react';
import { Link } from 'react-router-dom';
import List from './List';

const Home = () => {

    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Python + React CRUD with MYSQL database</h2>
            <div className='row'>
            <div className='col-12'>
                <p><Link to="/Adduser" className="btn btn-success">Add New User</Link></p>
            </div>

                <div className='col-md-8'>
                    <List/>
                </div>
            </div>
        </div>
    )
};

export default Home;