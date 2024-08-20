import './App.css';
import { Cards } from "./components/Cards";
import { Header } from './components/Header';
import { Login } from "./Login";
import { Main } from "./Main";
import { Register } from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import Auth0ProviderWithHistory from "./auth0Provider";
import Profile from "./Profile";

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
                    <Route path="/cards" element={<div className={"cardsPage"}><Cards /></div>} />
                    <Route path="/profile" element={<div className={"profilePage"}><Profile /></div>} />
                </Routes>
                <Footer />
            </Auth0ProviderWithHistory>
        </Router>
    );
}

export default App;