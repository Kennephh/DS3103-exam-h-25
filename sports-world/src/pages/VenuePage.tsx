import VenueList from "../components/venues/VenueList";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useVenueContext } from "../contexts/VenueContext";

const VenuesPage = () => {
    const navigate = useNavigate();

    const {setUserSearch} = useVenueContext();


    return (
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                
                <div>
                    <div className="flex gap-2">
                        <Button className="py-2" onClick={ () => navigate("/register-venue") }>
                            Register New Venue
                        </Button>
                    </div>
                </div>
                <SearchBar
                    onSearch={setUserSearch}
                    placeholder="Search by name"
                />
                <VenueList/>
                
            </div>
        </>
    )
}

export default VenuesPage;