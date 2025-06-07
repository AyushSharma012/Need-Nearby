import React from "react";
import "./MainContent.css"

function MainContent(params) {
    return (
        <div className="container-fluid border main-content">
            <div className="row h-100 d-flex align-items-center justify-content-around mx-5">
                <div className="col">
                    <h3>lorem sdij</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Molestiae, fuga!</p>
                </div>
                <div className="col text-end">world </div>
            </div>
        </div>
    )
}

export default MainContent;