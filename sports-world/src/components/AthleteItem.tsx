import type { IAthlete } from "../interfaces/IAthlete";
import type { FC } from "react";
import { API_BASE_URL } from "../config";

interface AthleteItemProps {
    athlete: IAthlete;
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void;
    onPurchase?: (id: number) => void;
}

const AthleteItem: FC<AthleteItemProps> = ({ athlete, onDelete, onEdit, onPurchase }) => {

    const handleDelete = () => {
        if (onDelete && athlete.id !== undefined) {
            onDelete(athlete.id);
        } else {
            console.warn("Cannot delete athlete without a valid ID.");
        }
    };

    const handleEdit = () => {
        if (onEdit && athlete.id !== undefined) {
            onEdit(athlete.id);
        } else {
            console.warn("Cannot edit athlete without a valid ID.");
        }
    };

    const handlePurchase = () => {
        if (onPurchase && athlete.id !== undefined) {
            onPurchase(athlete.id);
        } else {
            console.warn("Cannot purchase athlete without a valid ID.");
        }
    };

    const buttonClasses = `
        bg-sky-600
        text-white
        px-3
        py-1
        rounded
        hover:bg-sky-700
        hover:cursor-pointer
    `;

    return (
        <article className="
            h-full
            w-full
            bg-white
            rounded
            shadow-xl
            hover:cursor-pointer
            hover:scale-105
            transition-all
            overflow-hidden
            ">

            {athlete.image && (
                <img src={API_BASE_URL + athlete.image} alt={athlete.name} className="w-full aspect-3/4 object-cover rounded-t border border-black/75" />
            )}

            <div className="px-2 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{athlete.name}</h3>
                <p className=""><span className="font-semibold">Gender:</span> {athlete.gender}</p>
                <p className=""><span className="font-semibold">Price:</span> {"$" + athlete.price + " (USD)"}</p>
                <p className="">
                    <span className="font-semibold">Status:</span>
                    <span className={athlete.purchaseStatus ? "" : "text-red-600"}> { athlete.purchaseStatus ? "Purchased" : "Not purchased" }</span>
                </p>
            </div>

            <div className="m-2 flex justify-end gap-2">
                {onDelete && <button className={buttonClasses} onClick={handleDelete}>Delete</button>}
                {onEdit && <button className={buttonClasses} onClick={handleEdit}>Edit</button>}
                {onPurchase && <button className={buttonClasses} onClick={handlePurchase}>Purchase</button>}
            </div>

        </article>
    );
};

export default AthleteItem;
