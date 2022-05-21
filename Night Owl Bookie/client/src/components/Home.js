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
                <p className="home-p">We started in 2022 as a place where people can come in for refreshing suggestions of reading.</p>
                <p className="home-p">Anyone who is a fan of literature is welcome to look into our books of the month and make suggestions for upcoming lists!</p>
            </div>
            <div className="home-buttons-container">
                <button className="BOTM-home">
                    <Link to={"/list_all"} className="link">
                    BOOKS OF THE MONTH
                    </Link>
                </button>
                <button className="BS-home">
                    <Link to={""} className="link">
                    BOOK SUGGESTIONS
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;