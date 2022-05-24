import { useParams } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import barlogo from "./NOB-bar-logo-transp.png";



const EditComment = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [nickname, setNickname] = useState("");
    const [comment, setComment] = useState("");
    const [isSuggestion, setIsSuggestion] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/comments/${id}`) 
            .then((response) => { // i like to spell out response 
                console.log(response);
                console.log(response.data);
                setNickname(response.data.Comment.nickname);
                setComment(response.data.Comment.comment);
                setIsSuggestion(response.data.Comment.isSuggestion);
            })
            .catch((error) => {
                console.log(error); 
            })
    }, [id]);

    const updateHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/comments/${id}`, {
            nickname,
            comment,
            isSuggestion
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate(`/comments/list_add`);
        })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    }
    return(
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
            <div style={{marginTop: '20px'}}>
                <h1>Edit your comment</h1>
            </div>
            <form onSubmit={updateHandler}>
                <div className="all-comments-container">
                    <p>Nickname:</p>
                    <input
                        value={nickname}
                        type="text"
                        onChange={(event) => setNickname(event.target.value)}
                    />
                    <p>Comment:</p>
                    <textarea style={{width: '400px', height: '250px'}}
                        value={comment}
                        type="text"
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <p>Is this a suggestion?</p>
                    <input
                        checked={isSuggestion}
                        type="checkbox"
                        onChange={(event) => setIsSuggestion(event.target.checked)}
                    />
                </div>
                <button className="confirm-changes-button" type="submit">
                    CONFIRM CHANGES
                </button>
                <button onClick={(event) => navigate(`/comments/list_add`)}>
                    Cancel
                </button>
                {errors.nickname ? <span>{errors.nickname.message}</span> : null}
                {errors.comment ? <span>{errors.comment.message}</span> : null}
            </form>
        </div>
        
    )
}

export default EditComment;