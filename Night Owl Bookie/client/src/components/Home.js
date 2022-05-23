import React from "react"
import {useNavigate} from "react-router-dom"
import image from "./NOB-logo.png"

function Home() {
    const navigate = useNavigate();
    return(
        <div className="home-page-container">
            <header className="NOB-header">
                <img src={image} className="NOB-logo" alt="club-logo"/>
            </header>
            <div className="about-us-section">
                <h1 className="home-title">HOME</h1>
                <p className="home-p">We started in 2022 as a place where people can come in for refreshing suggestions of reading.</p>
                <p className="home-p">Anyone who is a fan of literature is welcome to look into our books of the month and make suggestions for upcoming lists and share their thoughts in our blog!</p>
            </div>
            <div className="home-buttons-container">
                <button className="BOTM-home" onClick={()=>{navigate(`/books/list_all`)}}>
                    BOOKS OF THE MONTH
                </button>
                <button className="BS-home" onClick={()=>{navigate(`/comments/list_add`)}}>
                    GO TO BLOG
                </button>
            </div>
        </div>
    )
}

export default Home;