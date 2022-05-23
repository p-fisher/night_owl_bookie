import React, { useState } from "react";
import CreateNewComment from "../components/CreateComment"
// import FindOne from "../components/FindOne";
// import FindAllComments from "../components/_____Comments";

const ListAddComments = (props) => {
    //We make sure our state is lifted so that both children components can have access to our getter and setter
    //That way an update that happens in CreateProduct can be reflected in DisplayAll
    // const [bookList, setBookList] = useState([]);
    const [newComment, setNewComment] = useState([]);


    return (
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
    );
};

export default ListAddComments;