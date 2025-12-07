import { Link } from "react-router-dom"
import AthleteList from "../components/AthleteList"


const AdministerAthletesPage = () => {
    return(
        <>
            <div className="py-4">
                <Link to="/register-athlete"
                    className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700">
                    + New Athlete
                </Link>
            </div>

            <AthleteList />
        </>
    )
}

export default AdministerAthletesPage