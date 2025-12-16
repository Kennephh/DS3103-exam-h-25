import { useState } from "react";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import type { IVenue } from "../interfaces/IVenue";
import VenueService from "../services/VenueService";

const useVenuesActions = () => {

    const [status, setStatus] = useState({
        message: "",
        type: "",
        isSubmitting: false
    });

    const handleImageUpload = async (imageFile: File): Promise<string | null> => {
        const uploadedPath = await VenueService.uploadImage(imageFile);
        return uploadedPath;
    };


    const addVenue = async (newVenue: IVenue, image: File | null): Promise<IVenueResponse> => {
        setStatus({
            message: "",
            type: "",
            isSubmitting: true
        });
        if(image){
            const imagePath = await handleImageUpload(image);
            if(imagePath){
                newVenue.image = imagePath;
            } else{
                const imageResult = {
                    success: false,
                    data: null
                };
                setStatus({
                    isSubmitting: false,
                    message: "Error uploading image, venue not saved.",
                    type: "Error"
                });
                return imageResult;
            }
        }
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

    const editVenue = async (venueToUpdate: IVenue, image: File | null): Promise<IVenueResponse> => {
        setStatus({
            isSubmitting: true,
            message: "",
            type: ""
        });
        if(image){
            const imagePath = await handleImageUpload(image);
            if(imagePath){
                venueToUpdate.image = imagePath;
            } else{
                const imageResult = {
                    success: false,
                    data: null
                };
                setStatus({
                    isSubmitting: false,
                    message: "Error updating image.",
                    type: "Error"
                });
                return imageResult;
            }
        }
        const result = await VenueService.updateVenue(venueToUpdate);
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

    const deleteVenue = async (id: number): Promise<IVenueResponse> => {
        setStatus({
            isSubmitting: true,
            message: "",
            type: ""
        });
        const result = await VenueService.deleteVenue(id);
        if(result.success){
            setStatus({
                isSubmitting: false,
                message: "Venue successfully deleted.",
                type: "Success"
            });
        } else{
            setStatus({
                isSubmitting: false,
                message: "Error deleting venue, try again.",
                type: "Error"
            });
        }
        return result;
    };


    return {
        addVenue,
        editVenue,
        deleteVenue,
        status
    };


}

export default useVenuesActions;