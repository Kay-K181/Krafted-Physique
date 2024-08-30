import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import ResultRef from "../Modal/ResultRef";

export default function PageTemplate({excerciseGroup, title, filters}) {

    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [error, setError] = useState(null);
    const [gridId, setGridId] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    const modalDialog = useRef();

    useEffect(() => {
        fetch(`http://localhost:8000/${excerciseGroup}`)
            .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }})
            .then((data) => {
                console.log(data);
                setData(data);
                setOriginalData(data);
            })
            .catch((error) => setError(error.message));
    }, [])

    if(error) {
        return <div>Error: {error}</div>
    }

    function openModal(id) {
        const item = originalData.find((item) => item.id === id);
        setSelectedItem(item);
        modalDialog.current.showModal();
    }

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
            const muscleGroup = originalData.filter((item) => {
                return group === item.main_muscles_targeted;
            })
            return setData(muscleGroup);
        }        
    }

  

    return(
        <div className="pagesContainer">
        <div className={`titleContainer center ${gridId ? 'opacity' : ''}`}>
            <h1 className="pagesTitle">{title}</h1>
        </div>
        <section className={`pagesSectionContainer ${gridId ? 'opacity' : ''}`}>
            {filters && (
                <div className="filterContainer">               
                    <h4>Filter:</h4>
                    {filters.map((group, index) => (
                        <p key={index} onClick={() => filtered(group)}>{group}</p>
                    ))}                    
                </div> 
                )}              
            <div className="sectionGrid">
                {data.map((item) => (
                    <div key={item.id} onClick={() => openModal(item.id)}>
                        <img src={item.image} alt={item.description} />
                        <h4 className="nameContainer">{item.name}</h4>
                        <p>{stars(item.rating)}</p>
                    </div>
                ))}
            </div>
        </section>
        <ResultRef 
            ref = {modalDialog}
            selectedItem = {selectedItem}           
        />
    </div>
    )
}