import axios from "axios";
import { type IVenue, } from "../interfaces/IVenue";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";
import { API_PATHS } from "../config";

const endpoint = API_PATHS.VENUES;

const getAllVenues = async () : Promise<IVenueResponse> => {
    try {
        const response = await axios.get<IVenue[]>(endpoint);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error("Axios error fetching all venues: ", error);
        return {
            success: false,
            data: []
        }
    }
}

const getVenueById = async (id: number) : Promise<IVenueResponse> => {
    try {
        const response = await axios.get<IVenue>(endpoint + "/" + id)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error(`Axios error fetching venue with id: '${id}',` ,error);
        return {
            success: false,
            data: null
        }
    }
}

const getVenueByName = async (name: string) : Promise<IVenueResponse> => {
    try {
        const response = await axios.get<IVenue[]>(endpoint + "/ByName/" + name)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error(`Axios error fetching venue with name(s): '${name}',` ,error);
        return{
            success: false,
            data: null
        }
    }
}

const createVenue = async (newVenue: IVenue): Promise<IVenueResponse> => {
    try {
        const response = await axios.post(endpoint, newVenue);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error(`Axios error creating new venue: `, error);
        return {
            success: false,
            data: null
        }
    }
}

const updateVenue = async (updatedVenue: IVenue): Promise<IVenueResponse> => {
    try {
        const response = await axios.put(endpoint + "/" + updatedVenue.id, updatedVenue);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error("Axios error updating the venue: ", error);
        return{
            success: false,
            data: null
        }
    }
}

const deleteVenue = async (id: number): Promise<IVenueResponse> => {
    try {
        const response = await axios.delete(endpoint + "/" + id);
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.error("Axios error deleting the venue: ", error);
        return {
            success: false,
            data: null
        }
    }
}

const uploadImage = async (img: File): Promise<string | null> => {
    try {
        const formData = new FormData();
        formData.append("img", img);
        const response = await axios.post(API_PATHS.IMAGES, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading image", error);
        throw error;
    }
}

export default { getAllVenues, getVenueById, getVenueByName, createVenue, updateVenue, deleteVenue, uploadImage }