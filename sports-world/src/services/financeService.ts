import axios from "axios";
import {type IFinance} from "../interfaces/IFinance";
import { API_PATHS } from "../config";

const endpoint = API_PATHS.FINANCE;

const getFinance = async () : Promise<IFinance | undefined> => {
    try{
        const response = await axios.get<IFinance>(`${endpoint}`);
        return response.data;
    } catch{

    }
}