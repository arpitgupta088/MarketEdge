import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
return (
    <nav class="navbar navbar-expand-lg border-bottom" 
        style={{ backgroundColor: "#f8f9fa" }}>
        <div class="container p-1">
            <Link class="navbar-brand" to="/">
                <img src="media/images/projectlogo.png" style={{width:"17%"}}></img>
            </Link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <form class="d-flex" role="search">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/about">
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/product">
                                Product
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </nav>
);
}

export default NavBar;
