import axios from "axios";
import React, {useEffect} from "react";
import {useNavigate } from "react-router-dom";


const FindAllComments = (props) => {

    const {listAllComments, setListAllComments} = props; //props here lets us have the 
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
        <div className="all-comments-container">
            <div >
            <table style={{width: '1000px', border: '1px', textAlign: 'left', margin: '0 auto'}}>

                    <tbody>
                        {
                            listAllComments ? //shorter if statement
                            listAllComments.map((blogComment,index) => ( 
                                <tr key={index}> 
                                    <td style = {{width: '200px'}}>{blogComment.nickname}</td>
                                    <td style = {{width: '530px'}}>{blogComment.comment}</td>
                                    <td style = {{width: '120px'}}>{blogComment.isSuggestion ? <span>Suggested Title</span> : null }</td>
                                    <td style = {{width: '150px', textAlign: 'right'}}>
                                        <button onClick={()=> {navigate(`/comments/edit/${blogComment._id}`)}}>
                                            EDIT
                                        </button>&nbsp;&nbsp;&nbsp;
                                        <button onClick={() => deleteHandler(blogComment._id) }>
                                            DELETE
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