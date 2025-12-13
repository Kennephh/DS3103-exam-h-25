import { useRef, useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";

const useVenuesActions = () => {

    const venueNameInput = useRef<HTMLInputElement | null>(null);
    const venueCapacityInput = useRef<HTMLInputElement | null>(null);


    const createVenue = async (newVenue: IVenue): Promise<IVenueResponse> => {
        try {
            const response = VenueService.createVenue(newVenue);
            
        } catch (error) {
            
        }


    }



}

export default useVenuesActions;