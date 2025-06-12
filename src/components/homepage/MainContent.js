import React from "react";
import "./MainContent.css"

function MainContent(params) {
    return (
        <div className="container-fluid border main-content">
            <div className="row h-100 d-flex align-items-center justify-content-around mx-5">
                <div className="col px-5">
                    <h3>lorem sdij</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Molestiae, fuga!</p>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center flex-column w-50">
                        {/* <form className="d-flex justify-content-between flex-row w-100">
                            <label for="search" className="form-label w-95">
                                <input type="search" className="form-control" id="search" placeholder="Search resource" />
                            </label>
                            <button type="submit" className="btn btn-light h-25 w-auto ms-2 border border-gray"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form> */}
                        <form className="d-flex align-items-center w-100 mb-3">
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control rounded-start py-2"
                                    id="search"
                                    placeholder="Search resource"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-light border border-gray rounded-end px-3"
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </form>
                        {/* <span className="mb-3">or</span> */}
                        <div className="d-flex align-items-center text-muted mb-3 w-100">
                            <div className="flex-grow-1">
                                <hr className="m-0" />
                            </div>
                            <span className="px-2 small">or</span>
                            <div className="flex-grow-1">
                                <hr className="m-0" />
                            </div>
                        </div>
                        <button className="btn btn-light w-100 border border-gray">Add a Resource</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainContent;