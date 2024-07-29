export default function Home() {

    const info = [
        {
            image: "https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_15.jpeg",
            text: "Chest",
            description: "image of a chest"
        },
        {
            image: "https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_16.jpeg",
            text: "Back",
            description: "image of a back"
        },
        {
            image: "https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_8.jpeg",
            text: "Legs",
            description: "image of a legs"
        },
        {
            image: "https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_17.jpeg",
            text: "Shoulders",
            description: "image of a shoulders"
        },
        {
            image: "https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_12.jpeg",
            text: "Arms",
            description: "image of a arms"
        }
    ]
    
    return(
        <div className="homePageContainer">
            <div className="homepageImgContainer">
                <img className="homepageImg" src="https://t4.ftcdn.net/jpg/05/85/44/21/360_F_585442143_bBcfNi9jjWcegDBu4Y8icJyUiygFg89H.jpg" alt="image of silverback ape" />
                <div className="homepageTitleBtnContainer">
                    <h1 className="homepageImgText">Unleash Your Strength</h1>
                    <button className="workoutPlanBtn">Create your plan now!</button>
                </div>
            </div>
            <section className="mainSectionContainer">
                <h2 className="primaryHeader">Select Your Training Area</h2>
                <div className="mainSectionGrid">
                    {info.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.description} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

