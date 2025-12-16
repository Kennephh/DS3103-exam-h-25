import type { IAthlete } from "../../interfaces/IAthlete";
import type { FC } from "react";
import { API_BASE_URL } from "../../config";
import Button from "../Button";

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


    return (
        <article className="
            p-2
            h-full
            w-full
            bg-white
            rounded
            shadow-xl
            hover:scale-102
            transition-all
            ">

            {athlete.image && (
                <img src={API_BASE_URL + athlete.image} alt={athlete.name} className="
                w-full
                aspect-3/4
                object-cover
                rounded-t
                border
                " />
            )}

            <div className="pt-2 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
                <p className=""><span className="font-semibold">Gender:</span> {athlete.gender}</p>
                <p className=""><span className="font-semibold">Price:</span> {"$" + athlete.price + " (USD)"}</p>
                <p className="">
                    <span className="font-semibold">Status:</span>
                    <span className={athlete.purchaseStatus ? "" : "text-red-600"}> { athlete.purchaseStatus ? "Purchased" : "Not purchased" }</span>
                </p>
            </div>

            <div className="my-2 flex justify-center gap-2">
                {onDelete && (
                    <Button className="flex-1" variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                )}

                {onEdit && (
                    <Button className="flex-1" variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                )}

                {onPurchase && (
                    <Button className="flex-1" variant="success" onClick={handlePurchase}>
                        Purchase
                    </Button>
                )}
            </div>

        </article>
    );
};

export default AthleteItem;
