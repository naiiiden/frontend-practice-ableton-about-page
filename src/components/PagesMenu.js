import { Link } from "react-router-dom";

const PagesMenu = () => {
    return (    
        <nav className="pages--nav">
            <ul className="pages--nav--ul">
                <li><Link to="/" className="pages--link">About</Link></li>
                <li><Link to="/jobs" className="pages--link">Jobs</Link></li>
                <li><Link to="/apprenticeships" className="pages--link">Apprenticeships</Link></li>
            </ul>
        </nav>
    )
}

export default PagesMenu;