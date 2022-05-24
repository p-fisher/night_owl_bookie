import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNewComment = (props) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [comment, setComment] = useState("");
    const [nickname, setNickname] = useState("");
    const [isSuggestion, setIsSuggestion] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/comments", {
            nickname,
            comment,
            isSuggestion
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.data.createdComment) {
                console.log("TEST");
                navigate("/comments/list_add");
            } else {
                setErrors(res.data.error.errors);
            }
            
        })
        .catch((err) => {
            console.log(err);
            // setErrors(err.response.data.error.errors);
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <header>
                    <h1>Add a Comment</h1>
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
                <label>Is this a book suggestion?</label>
                <input
                onChange={(e) => setIsSuggestion(e.target.checked)}
                    checked= {isSuggestion}
                    type= "checkbox"
                />
                {/* Check if errors.name exists. If it does, put error message in span tag. If errors.name does not exist reutrn null */}
                {errors.nickname ? <span>{errors.nickname.message}</span> : null}
                {errors.comment ? <span>{errors.comment.message}</span> : null}
                <div><p><button>Submit</button>
                <button onClick={(e) => navigate("/")}>Cancel</button></p></div>
            </form>
        </div>
    );
};

export default CreateNewComment;