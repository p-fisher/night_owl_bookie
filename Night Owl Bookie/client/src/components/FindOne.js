import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const FindOne = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [oneBook, setOneBook] = useState({});
    const [oneBook, setOneBook] = useState({});
    useEffect(() => {
    // console.log(id);
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

    const deleteHandler = () => {
        axios
            .delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //Because the delete request is on a different component, we do not need to update state here.
                //Navigating back to our Main.js will trigger a total rerender in DisplayAll,
                //which will rerun our useEffect, setting state to the most up to date collection list (delete included)
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>{oneBook.title}</h2>
            <p>Title: {oneBook.title}</p>
            <p>Image: <img style={{width:'50px'}} src={oneBook.imageUrl} alt=""></img></p>
            <p>Author: {oneBook.authorName}</p>
            <p>Genre: {oneBook.genre}</p>
            <p>Publication Date: {oneBook.year}</p>
            <p>Book Length: {oneBook.pages}</p>
            <p>Description: {oneBook.description}</p>
            <p>Likes: {oneBook.likes}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default FindOne;
