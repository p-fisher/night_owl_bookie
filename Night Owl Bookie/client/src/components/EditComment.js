import { useParams } from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate } from "react-router-dom"


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
                setNickname(response.data.nickname);
                setComment(response.data.comment);
                setIsSuggestion(response.data.isSuggestion);
            })
            .catch((error) => {
                console.log(error); 
            })
    }, [id]);

    const updateHandler = (event) => {
        axios.put(`http://localhost:8000/api/comments/${id}`, {
            nickname,
            comment,
            isSuggestion
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate(`/comments/list_all`);
        })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    }
    return(
        <div>
            {/* <div style={{width: '1000px', height:'72px', margin: '0 auto', backgroundColor: 'black', color:'white', lineHeight: '72px'}}>
                Night Owl Bookie&nbsp;&nbsp;
                <button onClick={() => {navigate(`/`)}}>
                    Home
                </button>    
            </div> */}
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
                    <input
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
            </form>
        </div>
        
    )
}

export default EditComment;