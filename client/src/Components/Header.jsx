import React from "react";
import './Style.css';

function Header() {
    return(

        <div className="container header-container">
            <div className="row">
                <div className="col text-center">
                    <h1>Google Books Search</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h2>Search for and Save Books of Interest</h2>
                </div>
            </div>
        </div>

    )
}

export default Header;