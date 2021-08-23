import React, { Fragment } from 'react';
import { Link, withRouter } from "react-router-dom"
import { signout, isAuthenticated } from '../auth/helper';

//for active menu link
const currentTab = (history, path) => {//history built with Link (router)

    if (history.location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };

    }
}

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
            </li>

            {/* //if user is aunticate adnd role is 1 and admin dashbard is shown*/}
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">U-Dashboard</Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">A-Dahboard</Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">Signin</Link>
                    </li>
                </Fragment>

            )}


            {isAuthenticated() && (
                <li className="nav-iten">
                    <span
                        className="nav-link text-warning" onClick={() => {
                            signout(() => {
                                history.push("/")//history have couple of methods
                            })
                        }}>Signout</span>

                </li>
            )}
        </ul>
    </div>
)

export default withRouter(Menu);
