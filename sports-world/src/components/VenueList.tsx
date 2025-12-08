import {type IVenue } from "../interfaces/IVenue";
import { useState, useEffect } from "react";
import VenueService from "../services/VenueService";
import VenueItem from "./VenueItem";

const VenueList = () => {
    const [venues, setVenues] = useState<IVenue[]>([]);

    useEffect(() => {
        const fetchVenues = async () => {
            const result = await VenueService.getAllVenues();
            if(result.success && Array.isArray(result.data)){
                setVenues(result.data);
            }
        };
        fetchVenues();
    }, []);

    const getVenueJSX = () => {
        const venueJSX = venues.map( (venue, index) => {
            return (
                <VenueItem
                    key={"venue" + index}
                    venue={venue}
                />
            )
        } );
        return venueJSX;
    }

    return(

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            { getVenueJSX() }
        </section>

    )

}

export default VenueList;