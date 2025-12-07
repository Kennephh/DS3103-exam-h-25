import axios from "axios";
import { type IAthlete } from "../interfaces/IAthlete";
import { API_PATHS } from "../config";

const endpoint = API_PATHS.ATHLETES;

const getAllAthletes = async () : Promise<IAthlete[]> => {
    try {
        const response = await axios.get(endpoint);
        return response.data;

    } catch (error) {
        console.error("Error fetching all athletes.", error);
        return [];
    }
}

export {getAllAthletes}