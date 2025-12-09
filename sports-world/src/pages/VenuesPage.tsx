import { Link } from "react-router-dom";
import VenueList from "../components/VenueList";

const VenuesPage = () => {
    return (
        <>
        
            <div className="py-4">
                <button className="
                    bg-sky-600
                    text-white
                    px-3
                    py-1
                    rounded
                    hover:bg-sky-700
                    hover:cursor-pointer
                ">
                    <Link to={"/"}>
                    Admin page
                    </Link>
                </button>
            </div>

            <VenueList/>
        </>
    )
}

export default VenuesPage;