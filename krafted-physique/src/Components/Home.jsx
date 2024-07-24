import React from "react";

export default function Home(){
    return(
        <div className="homePageContainer">
            <div className="homepageImgContainer">
                <img className="homepageImg" src="https://t4.ftcdn.net/jpg/05/85/44/21/360_F_585442143_bBcfNi9jjWcegDBu4Y8icJyUiygFg89H.jpg" alt="image of silverback ape" />
                <h1 className="homepageImgText">Unleash Your Strength</h1>
                <button className="workoutPlanBtn">Create your plan now!</button>
            </div>
            <section className="mainSectionContainer">
                <h2 className="primaryHeader">Categories</h2>
                <div className="mainSectionGrid">
                    <div>
                        <img src="https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_15.jpeg" alt="image of chest" />
                        <p>Chest</p>
                    </div>
                    <div>
                        <img src="https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_16.jpeg" alt="image of back" />
                        <p>Back</p>
                    </div>
                    <div>
                        <img src="https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_8.jpeg" alt="image of legs" />
                        <p>Legs</p>
                    </div>
                    <div>
                        <img src="https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_17.jpeg" alt="image of shoulders" />
                        <p>Shoulders</p>
                    </div>
                    <div>
                        <img src="https://www.garagegymreviews.com/wp-content/uploads/IsolationExercises_12.jpeg" alt="image of arms" />
                        <p>Arms</p>
                    </div>
                </div>
            </section>
        </div>
    )
}