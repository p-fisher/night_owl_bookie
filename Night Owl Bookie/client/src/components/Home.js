import React from "react"
import {Link} from "react-router-dom"
import image from "./NOB-logo.png"

function Home() {

    return(
        <div className="home-page-container">
            <header className="NOB-header">
                <img src={image} className="NOB-logo"/>
            </header>
            <div className="about-us-section">
                <h1 className="home-title">HOME</h1>
                <p>We started in 2022 as a place where people can come in for refreshing suggestions of reading.</p>
                <p>Anyone who is a fan of literature is welcome to look into our books of the month and make suggestions for upcoming lists!</p>
            </div>
            <div className="home-buttons-container">
                <button>
                    <Link to={"/list_all"}>
                    BOOKS OF THE MONTH
                    </Link>
                </button>
                <button>
                    <Link to={""}>
                    BOOK SUGGESTIONS
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;