import React, {useState} from "react"
import Base from "../core/Base";
import {Link, Redirect} from "react-router-dom";
import {signin, authenticate, isAuthenticated} from "../auth/helper"

const Signin = () => {

    const [values, setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading: false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true});//...values load all values
        signin({email,password})
        .then(//if request is success receives data
            data => {
                if (data?.error){//if data contains error set values as below line
                    setValues({...values, error: data.error, loading:false})
                }else{//if no error in data- authenticate data
                    authenticate(data, () => {//calling authenticate method from index.js
                                            //use next() miidleware in authenticate method so we can fire a call back () =>
                        setValues({...values, didRedirect: true})//this call back  clear up everything from input field
                    })
                }
            }
        )
       
        .catch(console.log("Signin Failed"))//in case if we are not able to interact with database

    }

    //to judge if redirect should be done and where to redirect
    const performRedirect =() => {
        if(didRedirect) {//is checked based on user
            if (user && user.role === 1){//if we have user and role is 1 then
                return <Redirect to="/admin/dashboard"></Redirect>//redirect to admin - role 1 is for admin
            }
            else{
                return <Redirect to="/user/dashboard"></Redirect>
            }
        }
        if(isAuthenticated()){//id user is authenticated refirect to home page
            return <Redirect to="/" />
        }
    };

    const loadingMessage = () => {
        return (
           loading && (//if loading is happening (true) - && (and) checks if both condition is true
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>

           )
        )
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 tex-left">

                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>
        )
    };
 
        const signInForm = () => {
            return (
                <div className="row">
                    <div className="col-md-6 offset-sm-3 tex-left">
                         <form>
                              <div className="form-group">
                                 <label className="text-light">Email</label>
                                 <input type="email" value={email} onChange={handleChange("email")} className="form-control" />
                             </div>
                             <div className="form-group">
                                 <label className="text-light">Password</label>
                                 <input type="password" value={password} onChange={handleChange("password")} className="form-control" />
                             </div>
                             <button onClick={onSubmit} className="btn form-control btn-block btn-success mt-3">SignUp</button>
                         </form>
                    </div>
                </div>
            )
        }
    
    
        return (
            <Base title="Sign up Page" description="User Signup Page">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            <p className="tect-white text-center">{JSON.stringify(values)}</p>

            </Base>
        
    );
};

export default Signin;