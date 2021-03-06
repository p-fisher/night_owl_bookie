import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNewComment = (props) => {

    const {listAllComments, setListAllComments} = props; //props here lets us have the properties from view component 'ListAdd'
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
            setListAllComments([...listAllComments, {nickname, comment, isSuggestion}]); 
            setComment(""); //so add comment empties after submit
            setNickname(""); //so add comment empties after submit
            setIsSuggestion(false); //so add comment empties after submit
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response);
            console.log(err.response.data);
            setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <hr style={{marginTop: '40px', width: '1000px'}}></hr>

                <form onSubmit={submitHandler} className="comment-form">
                <header style={{marginTop: '30px'}}>
                <h1 className="add-comment-title">ADD COMMENT</h1>
            </header>
                    <div>
                        <label>Nickname:</label>

                        {/* check component - in browser should change with each letter +/-  */}
                        <input style={{marginLeft: '10px', width: '200px'}}
                            onChange={(e) => setNickname(e.target.value)}
                            name="nickname"
                            value={nickname}
                        />
                    </div>
                    
                    <div style={{margin: '20px 0'}}>
                        <label>Comment:</label>
                        {/* check component - in browser should change with each letter +/-  */}
                        <textarea style={{marginLeft: '10px', width: '200px', height: '72px'}}
                            onChange={(e) => setComment(e.target.value)}
                            name="comment"
                            value={comment}
                        />
                    </div>
                        <label>My comment includes a book suggestion </label>
                        <input
                            onChange={(e) => setIsSuggestion(e.target.checked)}
                            checked= {isSuggestion}
                            type= "checkbox"
                        />
                        <br/>
                        <br/>

                    {/* Check if errors.name exists. If it does, put error message in span tag. If errors.name does not exist reutrn null */}
                        {errors.nickname ? <span>{errors.nickname.message}</span> : null}
                        <br/>
                        {errors.comment ? <span>{errors.comment.message}</span> : null}
                        <br/>
                    <div>
                        <p>
                            <button>
                                SUBMIT
                            </button>&nbsp;&nbsp;&nbsp;

                            <button onClick={(e) => navigate("/")}>
                                CANCEL
                            </button>
                        </p>
                    </div>
                </form>
        </div>
    );
};

export default CreateNewComment;