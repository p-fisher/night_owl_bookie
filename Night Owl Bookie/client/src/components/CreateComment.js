import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateNewComment = (props) => {
    const [errors, setErrors] = useState({});
    const [comment, setComment] = useState("");
    const [nickname, setNickname] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        // e.preventDefault();

        axios
            .post("http://localhost:8000/api/comments", {
                nickname,comment
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
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
                    {/* <p><button  onClick={(e) => navigate("/")}>Home</button></p> */}
                    {/* <Link to={"/"}>Home</Link> */}
                </header>

                <div>
                <label>Your Nickname:</label>
                {/* check component - in browser should change with each letter +/-  */}
                <input
                    onChange={(e) => setNickname(e.target.value)}
                    name="nickname"
                    value={nickname}
                /></div>
                
                <div>
                <label>Comment:</label>
                {/* check component - in browser should change with each letter +/-  */}
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    name="comment"
                    value={comment}
                /></div>
                {/* Check if errors.name exists. If it does, put error message in span tag. If errors.name does not exist reutrn null */}
                {errors.nickname ? <span>{errors.nickname.message}</span> : null}
                {errors.comment ? <span>{errors.comment.message}</span> : null}
                <div><p><button type="sumbit">Submit</button>
                <button onClick={(e) => navigate("/")}>Cancel</button></p></div>
            </form>
        </div>
    );
};

export default CreateNewComment;