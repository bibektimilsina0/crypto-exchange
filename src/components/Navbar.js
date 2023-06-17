import React from "react";
import { Link } from "react-router-dom";
import '../Navbar.css';
import logo from '../image/logo1.jpg';


function Navbar() {
    return (
        <section className="navbar mw-100">
            <div className="logosection">
                <ul id="logosection">
                    <li>
                        <img src={logo} alt="logo" className="image-responsive rounded-circle" style={{ height: "40px", width: "40px" }} />
                    </li>
                    <li className="list" id="logo"><span className="text-info">Hi</span>crypto</li>

                </ul>
            </div>
            <div className="list">
                <ui id="lists">
                    <li className="list" id="home">
                    <a href='/' >Home</a>
                    </li>
                    <li className="list" id="market">
                    <a href='#market' >Market</a>
                    </li>
                    <li className="list" id="about">
                    <a href='#about' >About</a>
                    </li>
                    <li className="list" id="Portfolio">
                        <a href='#portfolio' >Portfolio</a>
                    </li>
                </ui>
            </div>
            <div className="signup" >
                <ul id="signup">
                    <li>Log In</li>
                    <li>
                        <Link to='/signup' >Register</Link>
                        </li>
                </ul>
            </div>

        </section>
    );
}
export default Navbar;