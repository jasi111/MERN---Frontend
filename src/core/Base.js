import React from 'react';
import Menu from  "./Menu.js";

const Base = ({
    title="My Title",
    description="My Description",
    className="bg-dark text-white p-4",
    children

}) => (
    //if there is curly bracket return keyword is neccessary
    //if no curly bracket only parantheses no need of return key word

    // return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
               <div className={className}>
                   {children}
               </div>
                <footer className="footer bg-dark mt-auto py-3">
                    <div className="container-fluid bg-success tex-white text-center py-3">
                        <h4>Feel free to reach out</h4>
                        <button className="btn btn-warning btn-lg">Contact US</button>
                    </div>
                    <div className="container">
                        <span className="text-muted">
                            An Amazing <span className="text-white">MERN</span> Stack
                        </span>
                    </div>

                </footer>
            </div>
        </div>
) 
// }

export default Base
