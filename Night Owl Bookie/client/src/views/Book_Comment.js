import React, { useState } from "react";
import FindOne from "../components/FindOne";
import FindAll from "../components/Comments";

const Book_Comment = (props) => {
    //We make sure our state is lifted so that both children components can have access to our getter and setter
    //That way an update that happens in CreateProduct can be reflected in DisplayAll
    const [bookList, setBookList] = useState([]);

    return (
        <div>
            {/* We pass down the getter/setter via props obj, with a key of productList and a value of (the getter itself) productList. 
                You can name the key whatever you want, but this naming convention allows for less confusion and easy usage
                (see deconstructuring/usage in Child components)*/}
            <FindOne
                bookList={bookList}
                setBookList={setBookList}
            />

            <Comments
                bookList={bookList}
                setBookList={setBookList}
            />
        </div>
    );
};

export default Book_Comment;
