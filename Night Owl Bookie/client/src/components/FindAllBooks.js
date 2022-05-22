import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// const FindAll = (props) => {
//     const { bookList, setBookList } = props;
//     const navigate = useNavigate();

const FindAllBooks = (props) => {
    // const [bookList, setBookList] = useState([]);
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

    const deleteFilter = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/books/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setBookList(
                    bookList.filter((book) => book._id !== idFromBelow)
                );
            })
            // const newList = bookList.filter(
            //     (book, index) => book._id !== idFromBelow
            // );
            // setBookList(newList);
            // })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
        <div style={{width: '1000px', height:'72px', margin: '0 auto', backgroundColor: 'black', color:'white', lineHeight: '72px'}}>Night Owl Bookie&nbsp;&nbsp;<button onClick={() => {
                                            navigate(`/`);
                                        }}
                                    >Home</button></div>
        <div style={{marginTop: '20px'}}>
        {/* <div> */}
        {/* <div> */}

        <h1>Books of the Month</h1>

            <div>
                {/* <Link to={"/CreateNew"}>Add an Book</Link> */}
            </div>
            <table style={{ margin: "auto", border: "1px solid black", width: "600px"}}>
                {/* <thead style={{ backgroundColor: "lightgray", color: "white" }}> */}
                <thead style={{backgroundColor: "grey", textAlign: "left"}}>
                    <tr>
                        <th>Book Title</th>
                        {/* <th>Image</th>
                        <th>Author</th>
                        <th>Genre</th> */}
                        <th>Published</th>
                        {/* <th>Length</th>
                        <th>Description</th>
                        <th>Likes</th> */}
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList
                        ? // iterate bookList
                        bookList.map((book, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "left" }}>{book.title}</td>
                                {/* <td style={{ textAlign: "left" }}><img style={{width:'50px'}} src={book.imageUrl} alt=""></img></td>
                                <td style={{ textAlign: "left" }}>{book.authorName}</td>
                                <td style={{ textAlign: "left" }}>{book.genre}</td> */}
                                <td style={{ textAlign: "left" }}>{book.year}</td>
                                {/* <td style={{ textAlign: "left" }}>{book.pages}</td>
                                <td style={{ textAlign: "left" }}>{book.description}</td>
                                <td style={{ textAlign: "left" }}>{book.likes}</td> */}
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/books/details/${book._id}`);
                                        }}
                                    >
                                        Details
                                    </button>
                                    {/* <button
                                        className="edit-button-style"
                                        onClick={() => {
                                            navigate(`/edit/${book._id}`);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-button-style"
                                        onClick={(e) =>
                                            deleteFilter(book._id)
                                        }
                                    >
                                        Delete
                                    </button> */}
                                </td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
            <p><button 
                                        onClick={() => {
                                            navigate(`/comments/list_all`);
                                        }}
                                    >Go to Blog</button></p>
        </div>
        </div>
    );
};

export default FindAllBooks;