import type { IAthlete } from "../interfaces/IAthlete";
import type { FC } from "react";

const AthleteItem: FC<{ athlete: IAthlete }> = ({ athlete }) => {
    return (
        <article className="
            h-full
            w-full
            p-4
            bg-gradient-to-br
            from-green-50
            to-green-200
            border-1
            border-green-950
            rounded-lg
            shadow-xs
            shadow-green-800
            hover:shadow-md
            hover:to-green-300
            hover:cursor-pointer
            transition-all
            duration-100
        ">
            <h3 className="text-xl font-bold mb-2 text-green-950">{athlete.name}</h3>
            <p className="text-green-900"><span className="font-semibold">Gender:</span> {athlete.gender}</p>
            <p className="text-green-900"><span className="font-semibold">Price:</span> {athlete.price}</p>
            <p className="text-green-900"><span className="font-semibold">Status:</span> {athlete.purchaseStatus}</p>

        </article>
    );
};

export default AthleteItem;
