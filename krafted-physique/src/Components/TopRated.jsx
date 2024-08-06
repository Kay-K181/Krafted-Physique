import { useEffect, useState } from "react"

export default function TopRated() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/exercises')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
    }, [])

    return(
        <div className="topRatedContainer">
            <div className="titleContainer center">
                <h1 className="titleTopRated">Top Rated Excerises</h1>
            </div>
            <section className="topRatedSectionContainer">
                <div className="filterContainer">
                    <h4>Filter:</h4>
                    <p>Chest</p>
                    <p>Back</p>
                    <p>Shoulders</p>
                    <p>Legs</p>
                    <p>Arms</p>
                    
                </div>
                <div className="mainSectionGrid">
                    {data.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.description} />
                            <p>{item.rating}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}