import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Register from './Register';

const Home = () => {

    return (

        <div>
            <div className='text-center  badge-primary'>
                <h2>e-LMS</h2>
            </div>

            <div className='container text-center'>
                <p>
                    Welcome to the e-LMS website for all your e-Learning.
                </p>
            </div>

            <nav>
                <div className='text-center'>

                    <Link to="/register">
                        <button onClick={<Register />} type="button" className="btn btn-outline-primary mx-sm-3 my-sm-3">Register</button>
                    </Link>

                    <Link to="/login">
                        <button type="button" className="btn btn-outline-primary mx-sm-3 my-sm-3">Login</button>
                    </Link>

                </div>
            </nav>
        </div>
    );
};

export default Home;