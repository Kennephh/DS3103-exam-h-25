import { useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";
import { uploadImage } from "../services/athleteService";

const useVenuesActions = () => {

    const [status, setStatus] = useState({
        message: "",
        type: "",
        isSubmitting: false
    });


    const addVenue = async (newVenue: IVenue): Promise<IVenueResponse> => {
        setStatus({
            message: "",
            type: "",
            isSubmitting: true
        });
            const result = await VenueService.createVenue(newVenue);
            if(result.success){
                setStatus({
                    message: "Venue successfully created!",
                    type: "Success",
                    isSubmitting: false
                });
            } else {
                setStatus({
                    message: "Error creating venue, please try again later.",
                    type: "Error",
                    isSubmitting: false
                });
            }
            return result;
    };

    const editVenue = async (updatedVenue: IVenue): Promise<IVenueResponse> => {
        const result = await VenueService.updateVenue(updatedVenue);
        if(result.success){
            setStatus({
                message: "Venue successfully updated!",
                type: "Success",
                isSubmitting: false
            });
        } else {
            setStatus({
                message: "Error updating venue, please try again later.",
                type: "Error",
                isSubmitting: false
            });
        }
        return result;
    };



}

export default useVenuesActions;