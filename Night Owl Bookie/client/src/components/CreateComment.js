import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateNewComment = (props) => {
    const [errors, setErrors] = useState({});
    const [comment, setComment] = useState("");
    const [nickname, setNickname] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/comments", {
                nickname,comment
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
                //setState back to "", clearing out form on submission success
                // setAuthorList([...commentsList,res.data])
                // setTitle("");
                // setPrice("");
                // setDescription("");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <header>
                    <h1>Add a Comment</h1>
                    <Link to={"/"}>Home</Link>
                </header>

                <label>Your Nickname:</label>
                {/* check component - in browser should change with each letter +/-  */}
                <input
                    onChange={(e) => setNickname(e.target.value)}
                    name="nickname"
                    value={nickname}
                />

                <label>Comment:</label>
                {/* check component - in browser should change with each letter +/-  */}
                <input
                    onChange={(e) => setComment(e.target.value)}
                    name="comment"
                    value={comment}
                />
                {/* Check if errors.name exists. If it does, put error message in span tag. If errors.name does not exist reutrn null */}
                {errors.nickname ? <span>{errors.nickname.message}</span> : null}
                {errors.comment ? <span>{errors.comment.message}</span> : null}
                <button>Submit</button>
                {/* When this button is clicked, navigate back to "/" route */}
                <button onClick={(e) => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default CreateNewComment;