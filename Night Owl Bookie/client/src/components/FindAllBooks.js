import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import barlogo from "./NOB-bar-logo-transp.png";


const FindAllBooks = (props) => {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/books")
            .then((res) => {
                setBookList(res.data.Books);
                console.log(bookList);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{backgroundImage: 'url(https://unblast.com/wp-content/uploads/2018/10/Sky-Stars-Pattern.jpg)'}}> 
            <div className="books-list-container">
            <div className="int_topbar">
                <div className="int_topbar_nav"><img id="int_topbar_logo" src={barlogo} alt="logo"></img>
                    <div className="int_topbar_head">NIGHT OWL BOOKIE</div>
                    <div><button id="int_topbar_button" onClick={() => {
                                                navigate(`/`);
                                            }}
                                        >HOME</button></div>
                                        </div>
                                        </div>
            <div style={{marginTop: '20px'}}>
            <h1 className="BOTM-title">BOOKS OF THE MONTH</h1>

                <div>
                </div>
                <table className="list-books-table" style={{ margin: "auto", border: "1px solid black", width: "600px"}}>
                    <thead style={{backgroundColor: "lightgrey", textAlign: "left"}}>
                        <tr>
                            <th>Book Title</th>
                            <th>Published</th>
                            <th style={{textAlign: 'center'}}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList
                            ? // iterate bookList
                            bookList.map((book, index) => (
                                <tr key={index}>
                                    <td style={{ textAlign: "left" }}>{book.title}</td>
                                    <td style={{ textAlign: "left" }}>{book.year}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                navigate(`/books/details/${book._id}`);
                                            }}
                                        >
                                            DETAILS
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
                <p><button 
                                            onClick={() => {
                                                navigate(`/comments/list_add`);
                                            }}
                                        >GO TO BLOG</button></p>
            </div>
            </div>
        </div>
    );
};

export default FindAllBooks;
