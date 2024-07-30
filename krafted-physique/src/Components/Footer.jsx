export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerContactLayout">
                <div className="textImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2016/01/10/22/23/location-1132647_1280.png" alt="location icon" />
                    <div>
                        <p>181 Revolution St</p>
                        <p>London, United Kingdom</p>
                    </div>
                </div>
                <div className="textImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/phone-148955_1280.png" alt="phone icon" />
                    <p>+44 203 8462840</p>
                </div>
                <div className="textImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/15/16/envelope-1293123_1280.png" alt="letter icon" />
                    <p>support@kraftedphysique.com</p>
                </div>              
            </div>
            <div className="aboutCompanyLayout">
                <h4>About the Company</h4>
                <p>Empower Fitness helps individuals achieve their health goals through personalised workout plans, expert guidance, and a supportive community environment.</p>
            </div>            
        </div>
    )
}