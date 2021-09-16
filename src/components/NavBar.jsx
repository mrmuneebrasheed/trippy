import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link to="/">
                <a href="" className="navbar-brand">
                    Trippy
                </a>
            </Link>
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
                        <Link to="/">
                            <a
                                href="src\components\Home.jsx"
                                className="nav-link"
                            >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/hotels">
                            <a
                                href="src\components\Hotels.jsx"
                                className="nav-link"
                            >
                                Hotels
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
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
