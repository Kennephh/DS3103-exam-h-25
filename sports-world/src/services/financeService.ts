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


const putFinance = async (updateFinance : IFinance) : Promise<IFinance | undefined> => {
    try{
        const response = await axios.put(endpoint, updateFinance);
        return response.data
        }
     catch (error) {
        console.error("Error updating finances", error);
        return undefined
    }
}

export {getFinance, putFinance}