import { Link } from "react-router-dom";

const PagesMenu = () => {
    return (    
        // <A> TAGS WILL BECOME NAVLINK (REACT-ROUTER)
        <nav className="pages--nav">
            <ul className="pages--nav--ul">
                <li><Link to="/about" className="pages--link">About</Link></li>
                <li><Link to="/jobs" className="pages--link">Jobs</Link></li>
                <li><Link to="/apprenticeships" className="pages--link">Apprenticeships</Link></li>
            </ul>
            {/* <Routes>
                <Route path="/about" element={<About/>}/>
            </Routes> */}
        </nav>
    )
}

export default PagesMenu;