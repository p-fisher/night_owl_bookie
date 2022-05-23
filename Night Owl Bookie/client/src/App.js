import "./App.css";

import Home from "./components/Home";
import FindOneBook from "./components/FindOneBook";
import FindAllComments from "./components/FindAllComments"
import FindAllBooks from "./components/FindAllBooks";
import CreateNewComment from "./components/CreateComment";
import ListAddComments from "./views/ListAddComments";
import EditComment from "./components/EditComment";
// import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books/details/:id" element={<FindOneBook />} />
                    <Route path="/books/list_all" element={<FindAllBooks />} />
                    <Route path="/comments/list_all" element={<FindAllComments />} />
                    <Route path="/comments/create" element={<CreateNewComment />} />
                    <Route path="/comments/list_add" element={<ListAddComments />} />
                    <Route path="/comments/edit/:id" element={<EditComment />} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
