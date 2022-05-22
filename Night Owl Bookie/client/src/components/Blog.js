import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// const FindAll = (props) => {
//     const { commentList, setCommentList } = props;
//     const navigate = useNavigate();

const FindAll = (props) => {
    // const [commentList, setCommentList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/comments")
            .then((res) => {
                setCommentList(res.data.Comments);
                console.log(commentList);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/comments/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setCommentList(
                    commentList.filter((comment) => comment._id !== idFromBelow)
                );
            })
            // const newList = commentList.filter(
            //     (comment, index) => comment._id !== idFromBelow
            // );
            // setCommentList(newList);
            // })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
        <div style={{width: '1000px', height:'72px', margin: '0 auto', backgroundColor: 'black', color:'white', lineHeight: '72px'}}>Night Owl Commentie&nbsp;&nbsp;<button onClick={() => {
                                            navigate(`/`);
                                        }}
                                    >Home</button></div>
        <div style={{marginTop: '20px'}}>
        {/* <div> */}
        {/* <div> */}

        <h1>Blog</h1>
        </div>
        </div>
