import { useNavigate } from "react-router-dom";
import useFetch from "./Hooks/useFetch";


export default function Home() {

    const navigate = useNavigate(); 
    const {data, loading, error} = useFetch('http://localhost:8000/muscle-groups');

    if(loading) {
        return <div>Loading...</div>;
    }

    if(error) {
        return <div>Error: {error}</div>;
    }

    function pages(title) {
        switch (title) {
            case "Chest": 
                navigate("/Chest");
                break;
            case "Back": 
                navigate("/Back");
                break;
            case "Shoulders": 
                navigate("/Shoulders");
                break;
            case "Legs": 
                navigate("/Legs");
                break;
            case "Arms": 
                navigate("/Arms");
                break;
            default: 
                navigate('/');
        }
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
        </div>
    )
}

