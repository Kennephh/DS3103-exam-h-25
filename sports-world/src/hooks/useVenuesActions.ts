import { useRef, useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";
import { uploadImage } from "../services/athleteService";

const useVenuesActions = () => {

    const [venue, setVenue] = useState({
        name: "",
        capacity: 0,
        image: ""
    });

    const venueNameInput = useRef<HTMLInputElement | null>(null);
    const venueCapacityInput = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File | null>(null);


    const createVenue = async (newVenue: IVenue): Promise<IVenueResponse> => {
        try {
            const result = VenueService.createVenue(newVenue);
            return result;
        } catch (error) {
            console.error("Error creating venue, please try again later.", error)
            return {
                success: false,
                data: null
            };
        }


    }



}

export default useVenuesActions;