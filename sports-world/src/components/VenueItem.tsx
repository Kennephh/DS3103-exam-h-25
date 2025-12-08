import {type IVenue } from "../interfaces/IVenue";
import { API_BASE_URL } from "../config";

export interface IVenueItemProps{
    venue: IVenue
}

const VenueItem = ({venue}: IVenueItemProps) => {

    return(
        <article className="
            h-full
            w-full
            p-4
            bg-white
            rounded
            shadow-xl
            hover:cursor-pointer
            hover:scale-102
            transition-all
        ">
            <h2>
                {venue.name}
            </h2>
            <div className="h-48 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src={API_BASE_URL + venue.image} alt={venue.name} />
            </div>
            <p>
                Capacity: {venue.capacity}
            </p>
        </article>
    );

}

export default VenueItem;