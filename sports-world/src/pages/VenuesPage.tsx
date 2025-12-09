import { Link } from "react-router-dom";
import VenueList from "../components/venues/VenueList";

const VenuesPage = () => {
    return (
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                
                <div className="pb-4">
                    <Link to="/register-venue" 
                        className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700">
                    + Register New Venue
                    </Link>
                </div>
                <VenueList/>
                
            </div>
        </>
    )
}

export default VenuesPage;