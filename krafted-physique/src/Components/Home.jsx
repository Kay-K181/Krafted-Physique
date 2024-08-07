import { useEffect, useState } from "react";

export default function Home() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/muscle-groups')
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response is not ok');
                }
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => setError(error.message));
    }, [])

    if(error) {
        return <div>Error: {error}</div>
    }
        
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
                    {data.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.description} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

