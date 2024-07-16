import React from "react";

export default function Navbar(){
    return(
        <nav className="NavLayout">
            <header className="NavHeader">Krafted Physique</header>
            <div className="NavSection">
                <div>Home</div>
                <div>Top Rated</div>
                <div>FAQs</div>
                <div>Contact Us</div>
            </div>
            <footer className="NavFooter">
                <p>Krafted Physique</p>
            </footer>
        </nav>
    )
}