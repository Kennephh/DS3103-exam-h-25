import {type IVenue } from "./IVenue";
import {type IFinance } from "./IFinance";


export interface IVenueResponse{
    success: boolean,
    data: IVenue[] | IVenue | null
}

export interface IFinanceResponse{
    success: boolean,
    data: IFinance[] | IFinance | null
}