import PageTemplate from "./Template/PageTemplate";

export default function TopRated() {

    const filters = ['All', 'Chest', 'Back', 'Shoulders', 'Legs', 'Arms'];

    return (
        <PageTemplate 
            url={'top-rated'}
            title={'Power Up: Best-Rated Exercises'}
            filters={filters}
        />
    )
}