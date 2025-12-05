import axios from "axios";
import { type IVenue } from "../interfaces/IVenue";

const endpoint = "http://localhost:5103/api/venue";

const getAllVenues = async () : Promise<IVenue[]> => {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}