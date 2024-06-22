import {React} from "react";
import {boxStyle} from "./styles";

export function Register() {
    return (
        <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div style={boxStyle}>
                <div>
                    <h1>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input type="text" className="form-control" id="name" placeholder="Name"/>
                        </div>
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
                    </form>
                </div>
            </div>
        </div>
    );
}