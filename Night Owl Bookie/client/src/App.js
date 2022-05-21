import "./App.css";

// import Main from "./views/Main";
// import CreateNew from "./components/CreateNew";
import FindOne from "./components/FindOne";
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
                    <Route path="/" element={<FindAll />} />
                    {/* <Route path="/create" element={<CreateNew />} /> */}
                    <Route path="/details" element={<FindOne />} />
                    <Route path="/list_all" element={<FindAll />} />
\                    {/* <Route path="/suggest" element={<SuggestOne />} /> */}
                    {/* <Route path="/edit/:id" element={<ChangeOne />} /> */}
                    {/* <Route path="/error" element={<Error />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
