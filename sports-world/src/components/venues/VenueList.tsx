import VenueItem from "./VenueItem";
import useVenues from "../../hooks/useVenues";
import SearchVenue from "../SearchBar";

const VenueList = () => {

    const {venues, isLoading, errorMessage, userSearch, setUserSearch} = useVenues();

    const getVenueJSX = () => {
        const venueJSX = venues.map( (venue) => {
            return (
                <VenueItem
                    key={venue.id}
                    venue={venue}
                />
            )
        } );
        return venueJSX;
    }

    return(
        <>
            <SearchVenue onSearch={setUserSearch}/>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {isLoading ? (
                    <p>Loading...</p>
                ) : errorMessage ? (
                    <p>{errorMessage}</p>
                ) : venues.length === 0 ? (
                    <p>Could not find venues with the name: '{userSearch}'</p>
                ) : ( getVenueJSX()
                )
                }
            </section>
        </>
    )
}

export default VenueList;