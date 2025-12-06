import axios from "axios";
import { type IAthlete } from "../interfaces/IAthlete";

const endpoint = "http://localhost:5103/api/athletes";

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