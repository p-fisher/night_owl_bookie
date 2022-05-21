import "./App.css";

// import Main from "./views/Main";
// import Home from "./components/Home";
import FindOne from "./components/FindOne";
import Comment from "./components/Comments"
import FindAll from "./components/FindAll";
// import SuggestOne from "./components/SuggestOne";
// import ChangeOne from "./components/ChangeOne";
// import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/details/:id" element={<FindOne />} />
                    <Route path="/list_all" element={<FindAll />} />
\                    {/* <Route path="/suggest" element={<SuggestOne />} /> */}
                    {/* <Route path="/edit/:id" element={<ChangeOne />} /> */}
                    {/* <Route path="/error" element={<Error />} /> */}
                    <Route path="/comments/book/:id" element={<Comment />} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
