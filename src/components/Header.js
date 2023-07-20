import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import HeaderMoreLink from "./HeaderMoreLink";

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
                    <nav className="mobile--header--nav" aria-label="Header">
                        <div className={`mobile--header--nav--ul ${!openMenu ? "" : "show"}`} role="menubar">
                            <ul class="mobile--nav--ul" role="menubar">
                                <li><a role="menuitem" href="https://www.ableton.com/en/live/">Live</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/push/">Push</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/link/">Link</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/shop/">Shop</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/packs/">Packs</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/help/">Help</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/trial/">Try Live for free</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/login/?next=/en/about/" className="mobile--login">Log in or register</a></li>
                            </ul>
                            
                            <h3 className="mobile--header--heading">More on Ableton.com:</h3>
                            <ul class="mobile--nav--ul" role="menubar">
                                <li><a role="menuitem" href="https://www.ableton.com/en/blog/" className="mobile--header--heading1--link">Blog</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/classroom/" className="mobile--header--heading1--link">Ableton for the Classroom</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/colleges-universities/" className="mobile--header--heading1--link">Ableton for Colleges and Universities</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/certified-training/" className="mobile--header--heading1--link">Certified Training</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/about/" className="mobile--header--heading1--link mobile--about">About Ableton</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/jobs/" className="mobile--header--heading1--link">Jobs</a></li>
                                <li><a role="menuitem" href="https://www.ableton.com/en/ausbildung/" className="mobile--header--heading1--link">Apprenticeships</a></li>
                            </ul>

                            <h3 className="mobile--header--heading">More from Ableton:</h3>
                            <ul className="mobile--header--nav--ul--li--container">
                                <HeaderMoreLink
                                    href="https://www.ableton.com/en/blog/loop/"
                                    className="mobile--header--nav--ul--li--subcontainer"
                                    h4="Loop"
                                    p="Watch talks, Performances and Features from Ableton's Summit for Music Makers"
                                />
                                <HeaderMoreLink
                                    href="https://learningmusic.ableton.com/"
                                    className="mobile--header--nav--ul--li--subcontainer"
                                    h4="Learning Music"
                                    p="Learn the fundamentals of music making right in your browser."
                                />
                                <HeaderMoreLink
                                    href="https://learningsynths.ableton.com/"
                                    className="mobile--header--nav--ul--li--subcontainer"
                                    h4="Learning Synths"
                                    p="Get started with synthesis using a web-based synth and accompanying lessons."
                                />
                                <HeaderMoreLink
                                    href="https://makingmusic.ableton.com/"
                                    className="mobile--header--nav--ul--li--subcontainer"
                                    h4="Making Music"
                                    p="Some tips from 74 Creative Strategies for Electronic Producers."
                                />
                            </ul>
                        </div>
                    </nav>
                </header>
            ) : (
                <header className="desktop--header">
                    <a href="https://www.ableton.com/en/" aria-label="Go to homepage"><Logo className="header--logo"/></a>
                    <nav className="header--nav" aria-label="Header">
                        <ul className="header--nav--ul" role="menubar">
                            <li><a role="menuitem" href="https://www.ableton.com/en/live/">Live</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/push/">Push</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/link/">Link</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/shop/">Shop</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/packs/">Packs</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/help/">Help</a></li>
                            <li><button aria-haspopup="true" aria-expanded={!openMore ? "false" : "true"} aria-label={!openMore ? "Open menu" : "Close menu"} className="nav--ul--more--button" onClick={() => setOpenMore(!openMore)}>{openMore ? "More -" : "More +"}</button></li>
                            <li className="li--link--live"><a role="menuitem" href="https://www.ableton.com/en/trial/" className="link--live">Try Live for free</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/login/?next=/en/about/" className="link--login">Log in or register</a></li>
                        </ul>
                    </nav>
                    <nav className={`header--nav--more--ul ${!openMore ? "" : "show"}`}>
                        <h3 className="header--nav--more--ul--heading">More on Ableton.com:</h3>
                        <ul className="nav--more--ul" role="menu">
                            <li><a role="menuitem" href="https://www.ableton.com/en/blog/">Blog</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/classroom/">Ableton for the Classroom</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/colleges-universities/">Ableton for Colleges and Universities</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/certified-training/">Certified Training</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/about/" className="link--about">About Ableton</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/jobs/">Jobs</a></li>
                            <li><a role="menuitem" href="https://www.ableton.com/en/ausbildung/">Apprenticeships</a></li>
                        </ul>
                        <h3 className="header--nav--more--ul--heading">More from Ableton:</h3>
                        <ul className="nav--more--ul2" role="menu">
                            <HeaderMoreLink
                                href="https://www.ableton.com/en/blog/loop/"
                                className="nav--more--ul2--link"
                                h4="Loop"
                                p="Watch talks, Performances and Features from Ableton's Summit for Music Makers"
                            />
                            <HeaderMoreLink
                                href="https://learningmusic.ableton.com/"
                                className="nav--more--ul2--link"
                                h4="Learning Music"
                                p="Learn the fundamentals of music making right in your browser."
                            />
                            <HeaderMoreLink
                                href="https://learningsynths.ableton.com/"
                                className="nav--more--ul2--link"
                                h4="Learning Synths"
                                p="Get started with synthesis using a web-based synth and accompanying lessons."
                            />
                            <HeaderMoreLink
                                href="https://makingmusic.ableton.com/"
                                className="nav--more--ul2--link"
                                h4="Making Music"
                                p="Some tips from 74 Creative Strategies for Electronic Producers."
                            />
                        </ul>
                    </nav>
                </header>
            )}
        </>
    )
}

export default Header;