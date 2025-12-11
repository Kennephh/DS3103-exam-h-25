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
        const response = await axios.get<IAthlete>(`${endpoint}/${id}`);
        return response.data
    } catch (error) {
        console.error(`Error fetching athlete with id ${id}`, error);
        return undefined;
    }
}

const getAthleteByName = async (name: string) : Promise<IAthlete[]> => {
    try{
        const response = await axios.get<IAthlete[]>(`${endpoint}/search?name=${name}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching athlete with name ${name}`, error);
        return [];
    }
}

const createAthlete = async (newAthlete: IAthlete) : Promise<IAthlete | undefined> => {
    try{
        const response = await axios.post<IAthlete>(endpoint, newAthlete);
        return response.data;
    } catch (error) {
        console.error("Error creating athlete.", error);
        return undefined;
    }
}

const updateAthlete = async (athleteToUpdate: IAthlete) : Promise<void> => {
    try{
        const url = `${endpoint}/${athleteToUpdate.id}`;
        await axios.put(url, athleteToUpdate)
    } catch (error) {
        console.error("Error updating athlete.", error);
        throw error;
    }
}

const deleteAthlete = async (id: number) : Promise<void> => {
    try{
        const url = `${endpoint}/${id}`;
        await axios.delete(url)
    } catch (error) {
        console.error("Error deleting athlete.", error);
        throw error;
    }
}

const uploadImage = async (img: File) : Promise<string | undefined> => {
    try{
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

export {
    getAllAthletes,
    getAthleteById,
    getAthleteByName,
    createAthlete,
    updateAthlete,
    deleteAthlete,
    uploadImage
}