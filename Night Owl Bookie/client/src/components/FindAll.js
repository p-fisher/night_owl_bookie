import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// const FindAll = (props) => {
//     const { bookList, setBookList } = props;
//     const navigate = useNavigate();

const FindAll = (props) => {
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
        {/* <div> */}

        <h1>List All</h1>

            <div>
                {/* <Link to={"/CreateNew"}>Add an Book</Link> */}
            </div>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                {/* <thead style={{ backgroundColor: "lightgray", color: "white" }}> */}
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Published</th>
                        <th>Length</th>
                        <th>Description</th>
                        <th>Likes</th>
                        {/* <th>Action Available</th> */}
                    </tr>
                </thead>
                <tbody>
                    {bookList
                        ? // iterate bookList
                        bookList.map((book, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "left" }}>{book.title}</td>
                                <td style={{ textAlign: "left" }}><img stylesrc={book.imageUrl} alt=""></img></td>
                                <td style={{ textAlign: "left" }}>{book.authorName}</td>
                                <td style={{ textAlign: "left" }}>{book.genre}</td>
                                <td style={{ textAlign: "left" }}>{book.year}</td>
                                <td style={{ textAlign: "left" }}>{book.pages}</td>
                                <td style={{ textAlign: "left" }}>{book.description}</td>
                                <td style={{ textAlign: "left" }}>{book.likes}</td>
                                <td>
                                    <button
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
                                    </button>
                                </td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default FindAll;
