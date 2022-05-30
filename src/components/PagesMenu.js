import { NavLink } from "react-router-dom";

const PagesMenu = () => {
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