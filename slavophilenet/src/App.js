import './App.css';
import {Cards} from "./components/Cards";
import {Header} from './components/Header';
import {Login} from "./Login";
import {Main} from "./Main";
import {Register} from "./Register";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={<Main/>}
                />
                <Route
                    path="/googleefd99f16c88a80cc.html"
                    element={<div>google-site-verification: googleefd99f16c88a80cc.html</div>}
                />
                <Route
                    path="/login"
                    element={<Login/>}
                />
                <Route
                    path="/register"
                    element={<Register/>}
                />
                <Route
                    path="/cards"
                    element={<div className={"cardsPage"}><Cards/></div>}
                />
            </Routes>
        </Router>
    );
}

export default App;
