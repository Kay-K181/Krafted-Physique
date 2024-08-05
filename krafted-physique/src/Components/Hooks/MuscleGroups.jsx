import { useEffect, useState } from "react"

export default function MusclesGroups(){
    
    const [muscleInfo, setMuscleInfo] = useState([]);
    
    useEffect(() => {
            fetch('http://localhost:8000/muscle-groups')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setMuscleInfo(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }, [])

    return {muscleInfo};
}