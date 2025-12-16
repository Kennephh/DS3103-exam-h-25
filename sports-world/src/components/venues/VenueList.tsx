import VenueItem from "./VenueItem";
import useVenues from "../../hooks/useVenues";
import SearchBar from "../SearchBar";
import { useVenueContext } from "../../contexts/VenueContext";

const VenueList = () => {

    const {venues, isLoading, errorMessage, userSearch, setUserSearch} = useVenueContext();

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

    const showVenues = () => {
        if(isLoading){
            return <p>Loading</p>
        }
        if(errorMessage){
            return <p>{errorMessage}</p>
        }
        if(venues.length === 0){
            return <p>Could not find venue with name: '{userSearch}'</p>
        }
        return getVenueJSX();
    };

    return(
        <>
            <SearchBar onSearch={setUserSearch} placeholder="Search venues..."/>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {showVenues()}
            </section>
        </>
    )
}

export default VenueList;