import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import barlogo from "./NOB-bar-logo-transp.png";


const FindOneBook = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneBook, setOneBook] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneBook(res.data.Book);
                console.log(oneBook);
            })
            .catch((err) => {
                console.log(err);
            });
    },[id]);

    return (
        <div>
        <div class="int_topbar">
            <div class="int_topbar_nav"><img id="int_topbar_logo" src={barlogo} alt=""></img>
                <div class="int_topbar_head">NIGHT OWL BOOKIE</div>
                <div><button id="int_topbar_button" onClick={() => {
                                            navigate(`/`);
                                        }}
                                    >Home</button></div>
                                    </div>
                                    </div>

        <h1>Book Details</h1>

        <div style={{marginTop: '20px'}}>
            <h2>{oneBook.title}</h2>
            <p><img style={{width:'300px'}} src={oneBook.imageUrl} alt=""></img></p>
            <p>Author: {oneBook.authorName}</p>
            <p>Genre: {oneBook.genre}</p>
            <p>Publication Date: {oneBook.year}</p>
            <p>Book Length: {oneBook.pages}</p>
            <p>Description: {oneBook.description}</p>
            <p>Likes: {oneBook.likes}</p>
            <p><button 
                                        onClick={() => {
                                            navigate(`/comments/list_add`);
                                        }}
                                    >GO TO BLOG</button></p>
                <button onClick={()=>{navigate(`/books/list_all`)}}>
                    BACK TO BOOKS OF THE MONTH
                </button>
        </div>
        </div>
    );
};

export default FindOneBook;
