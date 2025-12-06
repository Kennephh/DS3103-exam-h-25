import type { IAthlete } from "../interfaces/IAthlete";
import { useEffect, useState } from "react";
import { getAllAthletes } from "../services/athleteService";
import AthleteItem from "./AthleteItem";

const AthleteList = () => {
    const [athletes, setAThletes] = useState<IAthlete[]>([]);

    useEffect(() => {
        const fetchAthletes = async () => {
            const data = await getAllAthletes();
            if (data) setAThletes(data);
        };
        fetchAthletes();
    }, []);

    return (
        <section className="p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {athletes.map((athlete) => (
                    <li key={athlete.id}>
                        <AthleteItem athlete={athlete} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AthleteList