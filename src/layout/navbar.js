import React from 'react'
import { Link } from 'react-router-dom'

export default function

    () {
    return (<div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.youtube.com/">
                        FRESCO
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        
                    </button>
                    <Link className="btn btn-outline-light" to="/user_booking">AddBooking</Link>

                </div>
            </nav>

        </div>)
}
