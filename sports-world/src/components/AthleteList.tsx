import type { IAthlete } from "../interfaces/IAthlete";
import type { FC } from "react";
import AthleteItem from "./AthleteItem";

interface AthleteListProps {
    athletes: IAthlete[];
    onDelete: (id: number) => void;
}

const AthleteList: FC<AthleteListProps> = ({ athletes, onDelete }) => {

    return (
        <section className="">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {athletes.map((athlete) => (
                    <li key={athlete.id}>
                        <AthleteItem athlete={athlete} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AthleteList