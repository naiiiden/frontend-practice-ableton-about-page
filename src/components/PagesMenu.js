import { NavLink } from "react-router-dom";

const PagesMenu = () => {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".pages--nav").style.top = "0";
    } else {
        document.querySelector(".pages--nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }

    return (    
        <nav className="pages--nav">
            <ul className="pages--nav--ul">
                <li><NavLink className={`pages--link ${({ isActive }) => isActive ? "active" : ""}`} to="/">About</NavLink></li>
                <li><NavLink to="/jobs" className={`pages--link ${({ isActive }) => isActive ? "active" : ""}`}>Jobs</NavLink></li>
                <li><NavLink to="/apprenticeships" className={`pages--link ${({ isActive }) => isActive ? "active" : ""}`}>Apprenticeships</NavLink></li>
            </ul>
        </nav>
    )
}

export default PagesMenu;