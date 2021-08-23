import React, { useState } from "react"
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    // For Mern Backend API
    const onSubmit =  event => {
        event.preventDefault()
        setValues({...values, error:false})
        signup({name,email,password})//signup in frontend>auth >index.js
        .then(data => {
            if(data.error){//data or error -- if any error in input data display error
                setValues({...values, error: data.error, success:false})//load all values, error or  success
            }else{//else in case inputed data without error then empty the input field as below
                setValues({...values, 
                 name:"",
                 email:"",
                 password:"",
                 email:"",
                 error:"",
                 success:true})
            }
        })
        .catch(console.log("Error in Signup"))
    };

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 tex-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input onChange={handleChange("name")} type="text" required value={name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="email" required onChange={handleChange("email")} type="email" value={email} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")} type="password" required value={password} className="form-control"/>
                        </div>
                        <button onClick={onSubmit} className="btn form-control btn-success btn-block mt-3">SignUp</button>
                    </form>
                </div>
            </div>
        );
    };

const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                        New Account was created successfully. Please <Link to="/signin">Login</Link>
                    </div>
                </div>
            </div>
        )
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 tex-left">

                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                        error 
                    </div>
                </div>
            </div>
        )
    };



    return (
        <Base title="Sign up Page" description="User Signup Page">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>

        </Base>
    );
};

export default Signup;