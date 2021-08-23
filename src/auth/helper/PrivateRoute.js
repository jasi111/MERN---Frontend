import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {isAuthenticated} from "./index"

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    return (
      <Route
        {...rest}
        render={props =>
         isAuthenticated() ? (
            <Component {...props}/> 
         ) :(
           //if above vondition fails do below condition
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }





export default PrivateRoute
