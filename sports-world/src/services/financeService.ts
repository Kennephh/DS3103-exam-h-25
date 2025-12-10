import axios from "axios";
import {type IFinance} from "../interfaces/IFinance";
import { API_PATHS } from "../config";
import {type IFinanceResponse} from "../interfaces/ResponseInterfaces";


const endpoint = API_PATHS.FINANCE;

const getFinance = async () : Promise<IFinanceResponse | undefined> => {
    try{
        const response = await axios.get<IFinance>(`${endpoint}`);
        return{
            success : true,
            data : response.data
        }
    } catch (error) {
        console.error("Error fetching finances", error);
        return {
            success : false,
            data : null
        }
    }
}

const postFinance = async (newFinance : IFinance) : Promise<IFinanceResponse | undefined> => {
    try{
        const response = await axios.post<IFinance>(endpoint, newFinance);
        return{
            success : true,
            data : response.data
        }
    } catch (error) {
        console.error("Error posting finances", error);
        return {
            success : false,
            data : null
        }
    }
}

const putFinance = async (newFinance : IFinance) : Promise<IFinanceResponse | undefined> => {
    try{
        const response = await axios.put(endpoint, newFinance);
        return{
            success : true,
            data : response.data
        }
    } catch (error) {
        console.error("Error updating finances", error);
        return {
            success : false,
            data : null
        }
    }
}