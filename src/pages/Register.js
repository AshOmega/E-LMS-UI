import React from 'react';

const Register = () => {

    return (

        <div className="text-center ">

            <div className='text-center  badge-primary'>
                <h2>Register</h2>
            </div>

            <form className="form-group container justify-content-center">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">First Name</span>
                    </div>
                    <input type="text" id="firstName" className="form-control" placeholder="First Name" required/>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Last Name</span>
                    </div>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name" required/>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Email</span>
                    </div>
                    <input type="email" id="email" className="form-control" placeholder="Email" required/>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Password</span>
                    </div>
                    <input type="password" id="password" className="form-control" placeholder="Password" required/>

                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Confirm password</span>
                    </div>
                    <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
};

export default Register;