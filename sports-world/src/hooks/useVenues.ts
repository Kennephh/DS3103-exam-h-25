import { useState, useEffect } from "react";
import {type IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";

const useVenues = () => {

    const [venues, setVenues] = useState<IVenue[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [userSearch, setUserSearch] = useState<string>("");
    
    /* 
        Henter alle venues fra VenueService og lagrer det til result
        Sjekker om result.success er true OG om det er en array som kommer inn
        Stemmer disse betingelsene, så blir staten til venues satt, med result.data
     */
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

    /* 
        En sjekk som spør om userSearch (søkefeltet) er tom?
            Da vises hele listen med venues.
        Hvis søkefeltet IKKE er tom
            Blir listen filtrert basert på hva som skrives i søkefeltet
     */
    const filteredVenues = userSearch === "" ? 
        venues
        : venues.filter(venue => {
            if(venue.name) {
                return venue.name.toLowerCase().includes(userSearch.toLowerCase());
            }
            return false;
        });

    return {
        venues: filteredVenues,
        isLoading,
        errorMessage,
        userSearch,
        setUserSearch
    }

}

export default useVenues;