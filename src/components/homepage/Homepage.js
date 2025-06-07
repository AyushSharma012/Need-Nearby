import React from "react";
import './Homepage.css';

import Navbar from "./Navbar.js";
import MainContent from "./MainContent.js";

function Homepage(params) {
    return (
        <div>
            <Navbar />
            <MainContent />
        </div>
    )
}

export default Homepage;