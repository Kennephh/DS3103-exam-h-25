import { useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";
import { uploadImage } from "../services/athleteService";

const useVenuesActions = () => {

    const venueNameInput = useState<HTMLInputElement | null>(null);
    const venueCapacityInput = useState<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File | null>(null);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<string | null>("");


    const addVenue = async (newVenue: IVenue): Promise<IVenueResponse> => {
        setIsSubmitting(true);
        setStatusMessage("");
        try {
            const result = await VenueService.createVenue(newVenue);
            if(result.success){
                setStatusMessage("Venue created successfully!");
            } else {
                setStatusMessage("Error creating venue, please try again.");
            }
            return result;
        } catch (error) {
            console.error("Error creating venue, please try again later.", error)
            return {
                success: false,
                data: null
            };
        }
        finally{
            setIsSubmitting(false);
        }
    };

    const editVenue = async (updatedVenue: IVenue): Promise<IVenueResponse> => {
        const result = await VenueService.updateVenue(updatedVenue);
        if(result.success){
            setStatusMessage("");
        }
    };



}

export default useVenuesActions;