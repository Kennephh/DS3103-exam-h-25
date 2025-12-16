import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {type IVenue } from "../interfaces/IVenue";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import VenueService from "../services/VenueService";

interface VenueContextType {
    venues: IVenue[],
    isLoading: boolean,
    errorMessage: string,
    status: {
        isSubmitting: boolean,
        type: string,
        message: string
     },
     userSearch: string,
     setUserSearch: (search: string) => void;

     getVenueById: (id: number) => Promise<IVenueResponse>;
     addVenue: (newVenue: IVenue, image: File | null) => Promise<IVenueResponse>;
     editVenue: (venueToUpdate: IVenue, image: File | null) => Promise<IVenueResponse>;
     deleteVenue: (id: number) => Promise<void>;
}

const VenueContext = createContext<VenueContextType | null>(null); 

export const VenueProvider = ({ children }: { children: ReactNode }) => {
    const [venues, setVenues] = useState<IVenue[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [userSearch, setUserSearch] = useState<string>("");

    const [status, setStatus] = useState({
        isSubmitting: false,
        type: "",
        message: ""
    });

    useEffect(() => {
        fetchVenues();
    }, []);

    const fetchVenues = async () => {
        setIsLoading(true);
        const result = await VenueService.getAllVenues();
        if(result.success && Array.isArray(result.data)) {
            setVenues(result.data);
            setErrorMessage("");
        } else{
            setErrorMessage("Error fetching venues.");
        }
        setIsLoading(false);
    };

    const filteredVenues = userSearch === ""
    ? venues
    : venues.filter(venue => venue.name?.toLowerCase().includes(userSearch.toLowerCase()));

    const handleImageUpload = async (image: File): Promise<string | null> => {
        const result = await VenueService.uploadImage(image);
        if(result.success){
            return result.data as string;
        } else{
            return null;
        }
    };

    const addVenue = async (newVenue: IVenue, image: File | null): Promise<IVenueResponse> => {
        setStatus({
            isSubmitting: true,
            message: "",
            type:""
        });
        if(image){
            const path = await handleImageUpload(image);
            if(path){
                newVenue.image = path;
            } else{
                setStatus({
                    isSubmitting: false,
                    message: "Error uploading image. Please try again.",
                    type: "Error"
                });
                return {
                    success: false,
                    data: null
                };
            }
        }
        const result = await VenueService.createVenue(newVenue);
        if(result.success){
            setStatus({
                isSubmitting: false,
                message: "Venue successfully created!",
                type: "Success"
            });
            setVenues([... venues, result.data as IVenue]);
        } else{
            setStatus({
                isSubmitting: false,
                message: errorMessage || "Error creating venue.",
                type: "Error"
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
            const path = await handleImageUpload(image);
            if(path){
                venueToUpdate.image = path;
            } else{
                setStatus({
                    isSubmitting: false,
                    message: "Error uploading new image. Please try again.",
                    type: "Error"
                });
                return {
                    success: false,
                    data: null
                };
            }
        }
        const result = await VenueService.updateVenue(venueToUpdate);
        if(result.success){
            setStatus({
                isSubmitting: false,
                message: "Venue successfully updated!",
                type: "Success"
            });
            setVenues(venues.map(venue => venue.id === venueToUpdate.id ? (result.data as IVenue) : venue));
        } else{
            setStatus({
                isSubmitting: false,
                message: errorMessage,
                type: "Error"
            });
        }
        return result;
    };

    const deleteVenue = async (id: number) => {
        setStatus({
            isSubmitting: true,
            message: "",
            type: ""
        });
        const result = await VenueService.deleteVenue(id);
        if(result.success){
            setVenues(venues.filter(venue => venue.id !== id));
            setStatus({
                isSubmitting: false,
                message: "Venue deleted.",
                type: "Success"
            });
        } else{
            setStatus({
                isSubmitting: false,
                message: "Error deleting venue. Please try again.",
                type: "Error"
            });
        }
    };

    const getVenueById = async (id: number) => {
        return await VenueService.getVenueById(id);
    };

    return (
        <VenueContext.Provider value={{
            venues: filteredVenues,
            isLoading,
            errorMessage,
            status,
            userSearch,
            setUserSearch,
            getVenueById,
            addVenue,
            editVenue,
            deleteVenue
        }}>
            {children}
        </VenueContext.Provider>
    );
};

export const useVenueContext = () => {
    const context = useContext(VenueContext);
    if(!context) throw new Error ("useVenueContext must be used within a VenueProvider");
    return context;
};