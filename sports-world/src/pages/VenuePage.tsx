import { useNavigate } from "react-router-dom";
import VenuesList from "../components/venues/VenueList";
import Button from "../components/Button";

const VenuesPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                
                <div className="flex gap-2">
                    <Button className="py-2" onClick={() => navigate("/register-venue") }>
                        Register new Venue +
                    </Button>
                </div>
                <VenuesList/>
            </div>
        </>
    )
}

export default VenuesPage;