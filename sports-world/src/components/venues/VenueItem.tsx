import {type IVenue } from "../../interfaces/IVenue";
import { API_BASE_URL } from "../../config";

export interface IVenueItemProps{
    venue: IVenue
}

const VenueItem = ({venue}: IVenueItemProps) => {
    const btnClasses = `
        bg-sky-600
        text-white
        px-3
        py-1
        rounded
        hover:bg-sky-700
        hover:cursor-pointer
    `;

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
                <img src={API_BASE_URL + venue.image} alt={venue.name} className="w-full aspect-3/4 object-cover rounded-t"/>
            </div>
            <p>
                Capacity: {venue.capacity}
            </p>
            <div className="m-2 flex justify-end gap-2">
                <button className={btnClasses}>Edit</button>
                <button className={btnClasses}>Delete</button>
            </div>
        </article>
    );

}

export default VenueItem;