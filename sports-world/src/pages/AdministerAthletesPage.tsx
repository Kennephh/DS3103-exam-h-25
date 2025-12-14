import { Link, useNavigate } from "react-router-dom"
import AthleteList from "../components/athletes/AthleteList";
import { useAthleteContext } from "../contexts/AthleteContext";
import SearchBar from "../components/SearchBar";


const AdministerAthletesPage = () => {

    const navigate = useNavigate();

    const { athletes, getAthletes, removeAthlete, error } = useAthleteContext();

    const handleEdit = (id: number) => {
        navigate(`/edit-athlete/${id}`);
    };

    if (error) return <p className="text-red-500">{error}</p>

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div>
                <Link to="/register-athlete"
                    className="bg-sky-600 text-white p-2 rounded hover:bg-sky-700">
                    Register New Athlete
                </Link>
            </div>

            <SearchBar
                onSearch={getAthletes}
                placeholder="Search by name"
            />

            <AthleteList
                athletes={athletes}
                onDelete={removeAthlete}
                onEdit={handleEdit}
            />
        </div>
    )
}

export default AdministerAthletesPage