import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import ResultRef from "../Modal/ResultRef";
import useFetch from "../Hooks/useFetch";

export default function PageTemplate({excerciseGroup, title, filters}) {

    const [selectedItem, setSelectedItem] = useState(null)
    const modalDialog = useRef();
    const {data, originalData, loading, error, setData} = useFetch(`http://localhost:8000/${excerciseGroup}`);

    if(loading) {
        return <div>Loading...</div>
    }

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
        <div className={`titleContainer center`}>
            <h1 className="pagesTitle">{title}</h1>
        </div>
        <section className={'pagesSectionContainer'}>
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