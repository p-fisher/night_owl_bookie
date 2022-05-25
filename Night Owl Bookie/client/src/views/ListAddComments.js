import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateNewComment from "../components/CreateComment";
import FindAllComments from "../components/FindAllComments";
import barlogo from "../components/NOB-bar-logo-transp.png";


const ListAddComments = (props) => {
    //We make sure our state is lifted so that both children components can have access to our getter and setter
    //That way an update that happens in CreateProduct can be reflected in DisplayAll

    const [newComment, setNewComment] = useState([]);
    const [nickname, setNickname] = useState([]);
    const [comment, setComment] = useState([]);
    const [isSuggestion, setIsSuggestion] = useState(false);
    const [listAllComments, setListAllComments] = useState([]); //useState to hold all comments
    const navigate = useNavigate();


    return (
        <div>
<div className="int_topbar">
            <div className="int_topbar_nav"><img id="int_topbar_logo" src={barlogo} alt=""></img>
                <div className="int_topbar_head">NIGHT OWL BOOKIE</div>
                <div><button id="int_topbar_button" onClick={() => {
                                            navigate(`/`);
                                        }}
                                    >Home</button></div>
                                    </div>
                                    </div>
        <div style={{marginTop: '20px'}}>
        <h1>Blog</h1>
        <div>
            {/* We pass down the getter/setter via props obj, with a key of comments (nickname, setNickname....) 
            and a corresponding value of (the getter itself) 
            
                You can name the key whatever you want, but this naming convention allows for less confusion and easy usage
                (see deconstructuring/usage in Child components)*/}

            <FindAllComments
                nickname={nickname}
                setNickname={setNickname}
                comment={comment}
                setComment={setComment}
                isSuggestion={isSuggestion}
                setIsSuggestion={setIsSuggestion}
                listAllComments={listAllComments}      /* this allows new comments to show up at once no refresh */
                setListAllComments={setListAllComments} /* this allows new comments to show up at once no refresh*/
            />
            <CreateNewComment
                newComment={newComment}
                setNewComment={setNewComment}
                listAllComments={listAllComments} /* this allows new comments to show up at once no refresh */
                setListAllComments={setListAllComments} /* this allows new comments to show up at once no refresh */
            />
        </div>
        </div>
        </div>
    );
};

export default ListAddComments;