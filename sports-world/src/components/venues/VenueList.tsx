import VenueItem from "./VenueItem";
import SearchVenue from "../SearchBar";
import { useVenueContext } from "../../contexts/VenueContext";

const VenueList = () => {

    const {venues, isLoading, errorMessage, userSearch, setUserSearch, deleteVenue, status} = useVenueContext();

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this venue?");
        if(confirmDelete){
            await deleteVenue(id);
        }
    }

    const getVenueJSX = () => {
        const venueJSX = venues.map( (venue) => {
            return (
                <VenueItem
                    key={venue.id}
                    venue={venue}
                    onDelete={handleDelete}
                    onEdit={() => {}}
                />
            )
        } );
        return venueJSX;
    }

    return(
        <>
            {status.message && (
                <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-200 text-black px-4 py-3 rounded shadow-lg z-50
        animate-bounce
                    ${status.type === "Error" ? "bg-red-200 text-red-800" : "bg-green-200 text-black"}`}>
                    {status.message}
                </div>
            )}
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