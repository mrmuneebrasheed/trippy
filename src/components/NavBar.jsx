import React from "react";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a href="#" className="navbar-brand">
                Trippy
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Features</a>
                    </li>
                    <li classNameName="nav-item">
                        <a className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
