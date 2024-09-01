import {NavLink} from "react-router-dom"

export default function Navbar() { 
    
    return(
        <header className="NavLayout">
            <h1 className="NavHeader">Krafted Physique</h1>
            <nav className="NavSection">
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
            </nav>
        </header>
    )
}