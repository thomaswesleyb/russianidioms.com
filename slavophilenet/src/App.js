import './App.css';
import { Cards } from "./components/pages/Cards";
import { Header } from './components/Header';
import { Login } from "./components/pages/Login";
import { Main } from "./components/pages/Main";
import { Register } from "./components/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import Auth0ProviderWithHistory from "./auth0Provider";
import Profile from "./components/pages/Profile";
import AddIdiom from "./components/pages/AddIdiom";
import LoginRequired from "./components/pages/LoginRequired";

function App() {
    return (
        <Router>
            <Auth0ProviderWithHistory>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cards" element={<div className={"cardsPage"}>
                        <LoginRequired>
                            <Cards />
                        </LoginRequired>
                    </div>} />
                    <Route path="/profile" element={<div className={"profilePage"}>
                        <LoginRequired>
                            <Profile />
                        </LoginRequired>
                    </div>} />
                    <Route path="/new-idiom" element={<div className={"newIdiomPage"}>
                        <LoginRequired>
                            <AddIdiom />
                        </LoginRequired>
                    </div>} />
                </Routes>
                <Footer />
            </Auth0ProviderWithHistory>
        </Router>
    );
}

export default App;