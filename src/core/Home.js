import React from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"

function Home() {
    console.log("api is" ,API)
    return (
        <Base title="Home Page" description="Welcome to Online Store">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">
                        TEST
                    </button>
                </div>
                <div className="col-4">
                <button className="btn btn-success">
                        TEST
                    </button>
                </div>
                <div className="col-4">
                <button className="btn btn-success">
                        TEST
                    </button>
                </div>
                
            </div>
        </Base>
    )
}

export default Home
