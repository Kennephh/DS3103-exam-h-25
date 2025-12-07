import type { IAthlete } from "../interfaces/IAthlete";
import type { FC } from "react";
import { API_BASE_URL } from "../config";

const AthleteItem: FC<{ athlete: IAthlete }> = ({ athlete }) => {

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
            p-4
            bg-white
            rounded
            shadow-xl
            hover:cursor-pointer
            hover:scale-102
            transition-all
            ">

            {athlete.image && (
                <img src={API_BASE_URL + athlete.image} alt={athlete.name} className="w-full aspect-3/4 object-cover rounded mb-4 border-2 border-gray-700" />
            )}

            <h3 className="text-xl font-bold mb-2">{athlete.name}</h3>
            <p className=""><span className="font-semibold">Gender:</span> {athlete.gender}</p>
            <p className=""><span className="font-semibold">Price:</span> {"$" + athlete.price + " (USD)"}</p>
            <p className="">
                <span className="font-semibold">Status:</span>
                <span className={athlete.purchaseStatus ? "" : "text-red-600"}> { athlete.purchaseStatus ? "Purchased" : "Not purchased" }</span>
            </p>

             <div className="mt-4 flex justify-end gap-2">
                <button className={buttonClasses}>Edit</button>
                <button className={buttonClasses}>Delete</button>
            </div>

        </article>
    );
};

export default AthleteItem;
