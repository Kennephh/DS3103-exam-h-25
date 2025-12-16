import { useNavigate, useLocation } from "react-router-dom"
import AthleteList from "../components/athletes/AthleteList";
import { useAthleteContext } from "../contexts/AthleteContext";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { useEffect, useState } from "react";


const AdministerAthletesPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [localMsg, setLocalMsg] = useState<string | null>(null);
    const successMsg = location.state?.message as string | undefined;

    const { athletes, getAthletes, removeAthlete, error } = useAthleteContext();

    const handleEdit = (id: number) => {
        navigate(`/edit-athlete/${id}`);
    };

    const handleDelete = async (id: number) => {
        const confirmDel = window.confirm("Are you sure you want to delete this athlete?");
        if (confirmDel){
            try{
                await removeAthlete(id);
                setLocalMsg("Athlete deleted.");
                setTimeout( () => setLocalMsg(null), 7500);
            } catch (error){
                console.error("Delete failed");
            }
        }
    };

    const message = successMsg || localMsg;

    useEffect( () => {
        if (successMsg) {
            const timer = setTimeout( () => {
                navigate(location.pathname, {replace: true, state: {}});
            }, 7500);
            return () => clearTimeout(timer);
        }
    }, [successMsg, navigate, location.pathname]);

    if (error) return <p className="text-red-500">{error}</p>

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div className="flex gap-2">
                <Button className="py-2" onClick={ () => navigate("/register-athlete") }>
                    Register New Athlete
                </Button>
            </div>

            <SearchBar
                onSearch={getAthletes}
                placeholder="Search..."
            />

            <AthleteList
                athletes={athletes}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />

            {message && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-200 text-black px-4 py-3 rounded shadow-lg z-50
        animate-bounce">
                        {message}
                    </div>
                )}
        </div>
    )
}

export default AdministerAthletesPage