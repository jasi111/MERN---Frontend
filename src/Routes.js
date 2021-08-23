import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AdminRoute from './auth/helper/AdminRoute';
import PrivateRoute from './auth/helper/PrivateRoute';
import Home from "./core/Home";
import AdminDashboard from './user/AdminDashboard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashboard from './user/UserDashboard';


function Routes() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoute path="/user/dashboard" exact component={AdminDashboard}/>

            </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Routes
