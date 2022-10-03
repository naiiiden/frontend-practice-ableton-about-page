import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const updateMedia = () => setIsDesktop(window.innerWidth >= 1024);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
            {!isDesktop ? (
                <header className="mobile--header">
                    <Logo fill={!openMenu ? "#000" : "#fff"} className="mobile--header--logo"/>
                    <button style={{color: `${!openMenu ? "#000" : "#fff"}`}} aria-label="toggle navigation" className="mobile--header--menu--toggle" onClick={() => setOpenMenu(!openMenu)}>
                        Menu <span className="button--span">{!openMenu ? "⏷" : "⏶"}</span>
                    </button>
                    <nav className="mobile--header--nav">
                        <ul className={`mobile--header--nav--ul ${!openMenu ? "" : "show"}`}>
                            <li><a href="https://www.ableton.com/en/live/">Live</a></li>
                            <li><a href="https://www.ableton.com/en/push/">Push</a></li>
                            <li><a href="https://www.ableton.com/en/link/">Link</a></li>
                            <li><a href="https://www.ableton.com/en/shop/">Shop</a></li>
                            <li><a href="https://www.ableton.com/en/packs/">Packs</a></li>
                            <li><a href="https://www.ableton.com/en/help/">Help</a></li>
                            <li><a href="https://www.ableton.com/en/trial/">Try Live for free</a></li>
                            <li><a href="https://www.ableton.com/en/login/?next=/en/about/" className="mobile--login">Log in or register</a></li>
                            
                            <li><h3 className="mobile--header--heading">More on Ableton.com:</h3></li>
                            <li><a href="https://www.ableton.com/en/blog/" className="mobile--header--heading1--link">Blog</a></li>
                            <li><a href="https://www.ableton.com/en/classroom/" className="mobile--header--heading1--link">Ableton for the Classroom</a></li>
                            <li><a href="https://www.ableton.com/en/colleges-universities/" className="mobile--header--heading1--link">Ableton for Colleges and Universities</a></li>
                            <li><a href="https://www.ableton.com/en/certified-training/" className="mobile--header--heading1--link">Certified Training</a></li>
                            <li><a href="https://www.ableton.com/en/about/" className="mobile--header--heading1--link mobile--about">About Ableton</a></li>
                            <li><a href="https://www.ableton.com/en/jobs/" className="mobile--header--heading1--link">Jobs</a></li>
                            <li><a href="https://www.ableton.com/en/ausbildung/" className="mobile--header--heading1--link">Apprenticeships</a></li>

                            <li><h3 className="mobile--header--heading">More from Ableton:</h3></li>
                            <li className="mobile--header--nav--ul--li--container">
                                <a href="https://www.ableton.com/en/blog/loop/" className="mobile--header--nav--ul--li--subcontainer">
                                    <h4>Loop</h4>
                                    <p>Watch talks, Performances and Features from Ableton's Summit for Music Makers</p>
                                </a>
                                <a href="https://learningmusic.ableton.com/" className="mobile--header--nav--ul--li--subcontainer">
                                    <h4>Learning Music</h4>
                                    <p>Learn the fundamentals of music making right in your browser.</p>
                                </a>
                                <a href="https://learningsynths.ableton.com/" className="mobile--header--nav--ul--li--subcontainer">
                                    <h4>Learning Synths</h4>
                                    <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                </a>
                                <a href="https://makingmusic.ableton.com/" className="mobile--header--nav--ul--li--subcontainer">
                                    <h4>Making Music</h4>
                                    <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) : (
                <header className="desktop--header">
                    <a href="https://www.ableton.com/en/" aria-label="Go to homepage"><Logo className="header--logo"/></a>
                    <nav className="header--nav">
                        <ul className="header--nav--ul" role="menubar">
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/live/">Live</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/push/">Push</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/link/">Link</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/shop/">Shop</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/packs/">Packs</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/help/">Help</a></li>
                            <li role="none"><button aria-haspopup="true" aria-expanded={!openMore ? "false" : "true"} aria-label={!openMore ? "Open menu" : "Close menu"} className="nav--ul--more--button" onClick={() => setOpenMore(!openMore)}>{openMore ? "More -" : "More +"}</button></li>
                            <li role="none" className="li--link--live"><a role="menuitem" href="https://www.ableton.com/en/trial/" className="link--live">Try Live for free</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/login/?next=/en/about/" className="link--login">Log in or register</a></li>
                        </ul>
                    </nav>
                    <nav className={`header--nav--more--ul ${!openMore ? "" : "show"}`}>
                        <h3 className="header--nav--more--ul--heading">More on Ableton.com:</h3>
                        <ul className="nav--more--ul" role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/blog/">Blog</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/classroom/">Ableton for the Classroom</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/colleges-universities/">Ableton for Colleges and Universities</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/certified-training/">Certified Training</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/about/" className="link--about">About Ableton</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/jobs/">Jobs</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ableton.com/en/ausbildung/">Apprenticeships</a></li>
                        </ul>
                        <h3 className="header--nav--more--ul--heading">More from Ableton:</h3>
                        <ul className="nav--more--ul2" role="menu">
                            <li role="none">
                                <a role="menuitem" href="https://www.ableton.com/en/blog/loop/" className="nav--more--ul2--link">
                                    <h4>Loop</h4>
                                    <p>Watch talks, Performances and Features from Ableton's Summit for Music Makers</p>
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="https://learningmusic.ableton.com/" className="nav--more--ul2--link">
                                    <h4>Learning Music</h4>
                                    <p>Learn the fundamentals of music making right in your browser.</p>
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="https://learningsynths.ableton.com/" className="nav--more--ul2--link">
                                    <h4>Learning Synths</h4>
                                    <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="https://makingmusic.ableton.com/" className="nav--more--ul2--link">
                                    <h4>Making Music</h4>
                                    <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            )}
        </>
    )
}

export default Header;