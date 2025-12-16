import {type IVenue } from "../../interfaces/IVenue";
import { API_BASE_URL } from "../../config";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export interface IVenueItemProps{
    venue: IVenue,
    onDelete?: (id:number) => void
    onEdit?: (id: number) => void
}

const VenueItem = ({venue, onDelete, onEdit}: IVenueItemProps) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        if (onDelete && venue.id !== undefined) {
            onDelete(venue.id);
        } else {
            console.warn("Cannot delete venue without a valid ID.");
        }
    };

    const handleEdit = () => {
        if (onEdit && venue.id !== undefined) {
            navigate(`/edit-venue/${venue.id}`);
        } else {
            console.warn("Cannot edit venue without a valid ID.");
        }
    };

    return(
        <article className="
            h-full
            w-full
            p-2
            bg-white
            rounded
            shadow-xl
            hover:scale-102
            transition-all
        ">
            <div className="h-48 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src={API_BASE_URL + venue.image} alt={venue.name} className="w-full aspect-3/4 object-cover rounded-t border"/>
            </div>
            <h3 className="text-xl font-semibold">
                {venue.name}
            </h3>
            <p>
                <span className="font-semibold">Capacity:</span> {venue.capacity}
            </p>
            <div className="my-2 flex justify-center gap-2">
                {onDelete &&(
                <Button className="flex-1" variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                )}
                {onEdit &&(
                    <Button className="flex-1" variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                )}
            </div>
        </article>
    );

}

export default VenueItem;