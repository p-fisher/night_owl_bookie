import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateNewComment from "../components/CreateComment"
import barlogo from "../components/NOB-bar-logo-transp.png";

// import FindOne from "../components/FindOne";
// import FindAllComments from "../components/_____Comments";

const ListAddComments = (props) => {
    //We make sure our state is lifted so that both children components can have access to our getter and setter
    //That way an update that happens in CreateProduct can be reflected in DisplayAll
    // const [bookList, setBookList] = useState([]);
    const [newComment, setNewComment] = useState([]);
    const navigate = useNavigate();


    return (
        <div>
        {/* <div style={{width: '1000px', height:'72px', margin: '0 auto', backgroundColor: 'black', color:'white', lineHeight: '72px'}}>Night Owl Bookie&nbsp;&nbsp;<button onClick={() => {
                        navigate(`/`);
                        }}
                        >Home</button></div> */}

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
        <h1>Blog</h1>
        <div>
            {/* We pass down the getter/setter via props obj, with a key of productList and a value of (the getter itself) productList. 
                You can name the key whatever you want, but this naming convention allows for less confusion and easy usage
                (see deconstructuring/usage in Child components)*/}
            {/* <FindOne
                bookList={bookList}
                setBookList={setBookList}
            /> */}

            <CreateNewComment
                newComment={newComment}
                setNewComment={setNewComment}
            />
        </div>
        </div>
        </div>
    );
};

export default ListAddComments;