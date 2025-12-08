import { Link } from "react-router-dom"
import AthleteList from "../components/AthleteList"


const AdministerAthletesPage = () => {
    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div className="pb-4">
                <Link to="/register-athlete"
                    className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700">
                    + Register New Athlete
                </Link>
            </div>

            <AthleteList />
        </div>
    )
}

export default AdministerAthletesPage