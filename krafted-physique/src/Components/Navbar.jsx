import {NavLink} from "react-router-dom"

export default function Navbar() { 
    
    return(
        <nav className="NavLayout">
            <header className="NavHeader">Krafted Physique</header>
            <div className="NavSection">
                <NavLink to={"/"} activeclassname="active">
                    <div>Home</div>
                </NavLink>
                <NavLink to={"/TopRated"} activeclassname="active">
                    <div>Top Rated</div>
                </NavLink>
                <NavLink to={"/FAQs"} activeclassname="active">
                    <div>FAQs</div>
                </NavLink>
                <NavLink to={"/ContactUs"} activeclassname="active">
                    <div>Contact Us</div>
                </NavLink>
            </div>
        </nav>
    )
}