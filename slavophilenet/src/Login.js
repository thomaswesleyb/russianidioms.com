import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {boxStyle} from "./styles";

export function Login() {
    return (
        <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div style={boxStyle}>
                <div>
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                   placeholder="Email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/register">
                            <button type="button" className="btn btn-secondary ml-2">Register</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

