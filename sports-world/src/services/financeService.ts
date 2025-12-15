import axios from "axios";
import {type IFinance} from "../interfaces/IFinance";
import { API_PATHS } from "../config";


const endpoint = API_PATHS.FINANCE;

const getFinance = async () : Promise<IFinance | undefined> => {
    try{
        const response = await axios.get<IFinance>(`${endpoint}`);
        return response.data
    } catch (error) {
        console.error("Error fetching finances", error);
        return undefined
    }
}

const postFinance = async (newFinance : IFinance) : Promise <IFinance | undefined> => {
    try{
        const response = await axios.post<IFinance>(endpoint, newFinance);
        return response.data
    } catch (error) {
        console.error("Error posting finances", error);
        return undefined
    }
}

const putFinance = async (newFinance : IFinance) : Promise<IFinance | undefined> => {
    try{
        const response = await axios.put(endpoint, newFinance);
        return response.data
        }
     catch (error) {
        console.error("Error updating finances", error);
        return undefined
    }
}

export {getFinance, postFinance, putFinance}