import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import type { IAthlete } from "../interfaces/IAthlete";
import AthleteList from "../components/AthleteList"
import { getAthleteByName, getAllAthletes, deleteAthlete } from "../services/athleteService";


const AdministerAthletesPage = () => {

    const [athletes, setAthletes] = useState<IAthlete[]>([]);

    const fetchAthletes = async (searchQuery: string = "") => {
        let data;
        if (searchQuery){
            data = await getAthleteByName(searchQuery);
        } else {
            data = await getAllAthletes();
        }

        if (data) {
            const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
            setAthletes(sortedData);
        };
    };

    const navigate = useNavigate();

    const handleEdit = async (id: number) => {
        navigate(`/edit-athlete/${id}`);
    };

    useEffect(() => {
        fetchAthletes();
    }, []);

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        fetchAthletes(event.target.value);

    };

    const handleDelete = async (id: number) => {
        const confirmDel = window.confirm("Are you sure you want to delete this athlete?");
        if (confirmDel) {
            await deleteAthlete(id);
            setAthletes(
                athletes.filter(athlete => athlete.id !== id)
            );
        };
    };

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div>
                <Link to="/register-athlete"
                    className="bg-sky-600 text-white p-2 rounded hover:bg-sky-700">
                    Register New Athlete
                </Link>
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search by name.."
                    className="border p-2 rounded w-full"
                    onChange={handleSearch}
                />
            </div>

            <AthleteList athletes={athletes} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    )
}

export default AdministerAthletesPage