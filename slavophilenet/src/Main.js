import {React} from "react";
import {Link} from "react-router-dom";

export function Main() {
    return (
        <div class={"titleCard"}>

            <h1>Russianidioms.com</h1>
            <p>Welcome to Russianidioms.com, the place to learn all about Russian idioms!</p>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                </ul>
            </nav>
        </div>
    );
}