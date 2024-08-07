import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

export default function TopRated() {
    
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [error, setError] = useState(null);
    const [gridId, setGridId] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/top-rated')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setOriginalData(data);
            })
            .catch((error) => setError(error.message));
    }, [])

    function stars(rating) {
        let starArr = [];

        for(let i=0; i<5; i++) {
            if(i < rating) {
                starArr.push(<FontAwesomeIcon key={i} icon={solidStar} className="star filled"/>);
            } else {
                starArr.push(<FontAwesomeIcon key={i} icon={regularStar} className="star empty"/>);
            }
        }
        return starArr;
    }

    function filtered(group) {
        if(group === 'All') {
            return setData(originalData);
        } else {
            let muscleGroup = originalData.filter((item) => {
                return group === item.main_muscles_targeted;
            })
            return setData(muscleGroup);
        }        
    }

    function moreInfo(id) {
        setGridId(id);
    }

    const selectedItem = originalData.find(item => item.id === gridId);

    if(error) {
        return <div>Error: {error}</div>
    }

    return(
        <div className="topRatedContainer">
            <div className={`titleContainer center ${gridId ? 'opacity' : ''}`}>
                <h1 className="titleTopRated">Top Rated Excerises</h1>
            </div>
            <section className={`topRatedSectionContainer ${gridId ? 'opacity' : ''}`}>
                <div className="filterContainer">
                    <h4>Filter:</h4>
                    <p onClick={() => filtered('All')}>All</p>
                    <p onClick={() => filtered('Chest')}>Chest</p>
                    <p onClick={() => filtered('Back')}>Back</p>
                    <p onClick={() => filtered('Shoulders')}>Shoulders</p>
                    <p onClick={() => filtered('Legs')}>Legs</p>
                    <p onClick={() => filtered('Arms')}>Arms</p>
                    
                </div>
                <div className="mainSectionGrid">
                    {data.map((item) => (
                        <div key={item.id} onClick={() => moreInfo(item.id)}>
                            <img src={item.image} alt={item.description} />
                            <h4 className="nameContainer">{item.name}</h4>
                            <p>{stars(item.rating)}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="moreInfo">
                {gridId && ( 
                    <div className="infoContent">
                        <h2>Unlock the Secrets of Your Chosen Exercise</h2>
                        <p>{selectedItem?.description}</p>
                        <p>{selectedItem?.level}</p>
                        <p>{selectedItem?.equipment_type}</p>
                        <button onClick={() => moreInfo(false)}>X</button>
                    </div>
                )}
            </section>
        </div>
    )
}