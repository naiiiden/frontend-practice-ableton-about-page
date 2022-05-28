import { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="mobile--header">
            <Logo fill={!openMenu ? "#000" : "#fff"} className="mobile--header--logo"/>
            <button style={{color: `${!openMenu ? "#000" : "#fff"}`}} aria-label="toggle navigation" className="mobile--header--menu--toggle" onClick={() => setOpenMenu(!openMenu)}>
                Menu <span className="button--span">{!openMenu ? "⏷" : "⏶"}</span>
            </button>
            <nav className="mobile--header--nav">
                <ul className={`mobile--header--nav--ul ${!openMenu ? "" : "show"}`}>
                    <li><a href="">Live</a></li>
                    <li><a href="">Push</a></li>
                    <li><a href="">Link</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Packs</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Try Live for free</a></li>
                    <li><a href="" className="mobile--login">Log in or register</a></li>
                    
                    <li><h3 className="mobile--header--heading">More on Ableton.com:</h3></li>
                    <li><a href="" className="mobile--header--heading1--link">Blog</a></li>
                    <li><a href="" className="mobile--header--heading1--link">Ableton for the Classroom</a></li>
                    <li><a href="" className="mobile--header--heading1--link">Ableton for Colleges and Universities</a></li>
                    <li><a href="" className="mobile--header--heading1--link">Certified Training</a></li>
                    <li><a href="" className="mobile--header--heading1--link mobile--about">About Ableton</a></li>
                    <li><a href="" className="mobile--header--heading1--link">Jobs</a></li>
                    <li><a href="" className="mobile--header--heading1--link">Apprenticeships</a></li>

                    <li><h3 className="mobile--header--heading">More from Ableton:</h3></li>
                    <li className="mobile--header--nav--ul--li--container">
                        <a href="" className="mobile--header--nav--ul--li--subcontainer">
                            <h4>Loop</h4>
                            <p>Watch talks, Performances and Features from Ableton's Summit for Music Makers</p>
                        </a>
                        <a href="" className="mobile--header--nav--ul--li--subcontainer">
                            <h4>Learning Music</h4>
                            <p>Learn the fundamentals of music making right in your browser.</p>
                        </a>
                        <a href="" className="mobile--header--nav--ul--li--subcontainer">
                            <h4>Learning Synths</h4>
                            <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                        </a>
                        <a href="" className="mobile--header--nav--ul--li--subcontainer">
                            <h4>Making Music</h4>
                            <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;