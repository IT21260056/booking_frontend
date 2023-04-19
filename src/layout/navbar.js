import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';

export default function

    () {
    return (
        <div className="nav">
            <div class="navbar navbar-expand-lg navbar-dark bg">

                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        FRESCO
                    </Link>
                    <div className="nav-contain">

                        <a className="navbar-brand" href="https://www.youtube.com/">
                            Home
                        </a>

                        <a className="navbar-brand" href="https://www.youtube.com/">
                            Booking
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>

                        </button>
                        <Link className="btn btn-outline-light" to="/user_booking">AddBooking</Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
