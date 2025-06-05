import React from "react";
import './Homepage.css';

function Homepage(params) {
    return(
        // Navbar with centered text
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto" href="/">Need-Nearby</a>
            </div>
        </nav>
    )
}

export default Homepage;