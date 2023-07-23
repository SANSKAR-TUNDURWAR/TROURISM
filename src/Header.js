import {React} from "react";
import './header.css';
import Signup from "./Signup";
import Login from "./login";
import { BrowserRouter as Router, Route, Link, Switch }
    from "react-router-dom";

function SignupHandler(){
    <Router>
        <Route exact path="Signup" element={<Signup />} />
    </Router>
}

function LoginHandler(){
    <Router>
        <Route exact path="Login" element={<Login />} />
    </Router>
}



function Header(){
    return(
        <div className="wrap">
            <div>
                <button className="btn-red" id="btn" onClick={SignupHandler}>Signup</button>
               
                <button className="btn-red" id="btn" onClick={LoginHandler}>Login</button>
            </div>
        </div>
    )
}

export default Header;