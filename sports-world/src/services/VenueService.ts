import axios from "axios";
import { type IVenue, } from "../interfaces/IVenue";
import {type IVenueResponse } from "../interfaces/ResponseInterfaces";

const endpoint = "http://localhost:5103/api/venue";

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
            data: null
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

const createVenue = async (createdVenue: IVenue) => {
    try {
        const response = await axios.post(endpoint + createVenue);
    } catch (error) {
        
    }
}

export default {getAllVenues, getVenueById, getVenueByName, createVenue, }