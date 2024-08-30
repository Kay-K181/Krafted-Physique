import PageTemplate from "./Template/GeneralPageTemplate";

export default function TopRated() {

    const filters = ['All', 'Chest', 'Back', 'Shoulders', 'Legs', 'Arms'];

    return (
        <PageTemplate 
            excerciseGroup={'top-rated'}
            title={'Power Up: Best-Rated Exercises'}
            filters={filters}
        />
    )
}