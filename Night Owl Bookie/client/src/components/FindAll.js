import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const FindAll = (props) => {
    const { bookList, setBookList } = props;
    const navigate = useNavigate();

// const FindAll = (props) => {
//     const [bookList, setBookList] = useState([]);
//     const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/books")
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                setBookList(res.data);
                console.log(bookList);
            })
            .catch((err) => console.log(err));
    }, []);

    // const deleteFilter = (idFromBelow) => {
    //     axios
    //         .delete(`http://localhost:8000/api/books/${idFromBelow}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setBookList(
    //                 bookList.filter((book) => book._id !== idFromBelow)
    //             );
    //         })
    //         // const newList = bookList.filter(
    //         //     (book, index) => book._id !== idFromBelow
    //         // );
    //         // setBookList(newList);
    //         // })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div>
        {/* <div> */}

        <h1>List All</h1>

            <div>
                {/* <Link to={"/new"}>Add an Book</Link> */}
                {/* <p>We have quotes by:</p> */}
            </div>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                {/* <thead style={{ backgroundColor: "lightgray", color: "white" }}> */}
                <thead>
                    <tr>
                        <th>Book Title</th>
                        {/* <th>Action Available</th> */}
                    </tr>
                </thead>
                <tbody>
                    {bookList
                        ? // iterate bookList
                        bookList.map((book, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "left" }}>
                                    {book.title}
                                </td>
                                {/* <td>
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
                                </td> */}
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default FindAll;
