import { Link } from "react-router-dom"
import AthleteList from "../components/AthleteList"
import { useEffect, useState } from "react";
import { getAthleteByName, getAllAthletes } from "../services/athleteService";
import type { IAthlete } from "../interfaces/IAthlete";


const AdministerAthletesPage = () => {

    const [athletes, setAThletes] = useState<IAthlete[]>([]);

    const fetchAthletes = async (searchQuery: string = "") => {
            let data;
            if (searchQuery){
                data = await getAthleteByName(searchQuery);
            } else {
                data = await getAllAthletes();
            }

            if (data) setAThletes(data);
        };

    useEffect(() => {
        fetchAthletes();
    }, []);

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        fetchAthletes(event.target.value);

    };

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div className="pb-4">
                <Link to="/register-athlete"
                    className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700">
                    + Register New Athlete
                </Link>
            </div>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="border p-2 rounded w-full"
                    onChange={handleSearch}
                />
            </div>

            <AthleteList athletes={athletes}/>
        </div>
    )
}

export default AdministerAthletesPage