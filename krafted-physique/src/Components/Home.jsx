import { useEffect, useState } from "react";
import Chest from "./MusclePages/Chest";
import Back from "./MusclePages/Back";
import Shoulders from "./MusclePages/Shoulders";
import Legs from "./MusclePages/Legs";
import Arms from "./MusclePages/Arms";
import { Route, Routes, useNavigate } from "react-router-dom";


export default function Home() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    function pages(title) {
        switch (title) {
            case "Chest": 
                navigate("chest")
                break;
            case "Back": 
                navigate("back")
                break;
            case "Shoulders": 
                navigate("shoulders")
                break;
            case "Legs": 
                navigate("legs")
                break;
            case "Arms": 
                navigate("arms")
                break;
            default: 
                <div>Page not found</div>;
        }
    }
  
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
                        <div key={item.id} onClick={() => pages(item.title)}>
                            <img src={item.image} alt={item.description} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Routes>
                <Route path="chest" element={<Chest />}/>
                <Route path="back" element={<Back />}/>
                <Route path="shoulders" element={<Shoulders />}/>
                <Route path="legs" element={<Legs />}/>
                <Route path="arms" element={<Arms />}/>
            </Routes>
        </div>
    )
}

