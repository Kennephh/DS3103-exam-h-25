import axios from "axios";
import { type IAthlete } from "../interfaces/IAthlete";
import { API_PATHS } from "../config";

const endpoint = API_PATHS.ATHLETES;

const getAllAthletes = async () : Promise<IAthlete[]> => {
    try {
        const response = await axios.get<IAthlete[]>(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching all athletes.", error);
        return [];
    }
}

const getAthleteById = async (id: number) : Promise<IAthlete | undefined> => {
    try{
        const response = await axios.get<IAthlete>(`${API_PATHS.ATHLETES}/${id}`);
        return response.data
    } catch (error) {
        console.error(`Error fetching athlete with id ${id}`, error);
        return undefined;
    }
}

export {
    getAllAthletes,
    getAthleteById
}