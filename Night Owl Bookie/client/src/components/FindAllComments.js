import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate } from "react-router-dom";


const FindAllComments = () => {

    const [listAllComments, setListAllComments] = useState([]); //useState to hold all comments
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/comments") //get comments from the db route | GET request
            .then((response) => { // i like to spell out response 
                console.log(response);
                console.log(response.data);
                setListAllComments(response.data.Comments); //set the response information from the request in the listall setter
            })
            .catch((error) => {
                console.log(error); //i like to spell our error
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/comments/${id}`) 
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setListAllComments(listAllComments.filter((blogComment) => blogComment._id !== id))
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return(
        <div>
            <div style={{marginTop: '20px'}}>
                <h1>List All Comments</h1>
            </div>
            <div className="all-comments-container">
            <table style={{width: '1000px', border: '1px', textAlign: 'left', margin: '0 auto'}}>
                    {/* <thead className="table-head">
                        <tr className="table-row">
                            <th style = {{width: '20%'}}>Nickname</th> 
                            <th style = {{width: '50%'}}>Comment</th>
                            <th style = {{width: '10%'}}>Suggestion?</th>
                            <th style = {{width: '20%'}}>Actions</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            listAllComments ? //shorter if statement
                            listAllComments.map((blogComment,index) => ( 
                                <tr key={index}> 
                                    <td style = {{width: '200px'}}>{blogComment.nickname}</td>
                                    <td style = {{width: '600px'}}>{blogComment.comment}</td>
                                    <td style = {{width: '50px'}}>{blogComment.isSuggestion ? <span>(Sug'n)</span> : null }</td>
                                    <td style = {{width: '150px', textAlign: 'right'}}>
                                        <button onClick={()=> {navigate(`/comments/edit/${blogComment._id}`)}}>
                                            Edit
                                        </button>&nbsp;&nbsp;
                                        <button onClick={() => deleteHandler(blogComment._id) }>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            :null //else: null; if it isn't there it's fine
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default FindAllComments;