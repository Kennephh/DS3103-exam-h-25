import {type IVenue } from "./IVenue";

export interface IVenueResponse{
    success: boolean,
    data: IVenue[] | IVenue | null
}