import { useState, useEffect } from "react";
import {type IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";

const useVenues = () => {

    const [venues, setVenues] = useState<IVenue[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [userSearch, setUserSearch] = useState<string>("");
    
    useEffect(() => {
        const fetchVenues = async () => {
            const result = await VenueService.getAllVenues();
            if(result.success && Array.isArray(result.data)){
                setVenues(result.data);
            } else if(result.success == false){
                setErrorMessage("Error fetching venue. Please try again later.");
            }
            setIsLoading(false);
        };
        fetchVenues();
    }, []);

    const filteredVenues = userSearch === "" ? 
        venues
        : venues.filter(venue => {
            if(venue.name) {
                return venue.name.toLowerCase().includes(userSearch.toLowerCase());
            }
            return false;
        })

    return {
        venues: filteredVenues,
        isLoading,
        errorMessage,
        userSearch,
        setUserSearch
    }

}

export default useVenues;