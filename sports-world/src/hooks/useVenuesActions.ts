import { useRef, useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";

const useVenuesActions = () => {

    const venueNameInput = useRef<HTMLInputElement | null>(null);
    const venueCapacityInput = useRef<HTMLInputElement | null>(null);


    const createVenue = async (newVenue: IVenue): IVenueResponse => {
        try {
            const 
        } catch (error) {
            
        }


    }



}

export default useVenuesActions;