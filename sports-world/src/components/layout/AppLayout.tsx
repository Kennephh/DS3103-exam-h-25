
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-sky-600 p-4 text-white shadow-md">
                <div className="container mx-auto flex justify-between">
                    <Link to="/" className="font-bold text-xl">SportsWorld</Link>
                    <ul className="flex gap-4">
                      <li><Link to="/athletes" className="hover:underline">Athletes</Link></li>
                      <li><Link to="/finance" className="hover:underline">Finance</Link></li>
                      <li><Link to="/venues" className="hover:underline">Venues</Link></li>
                    </ul>
                </div>
            </nav>

          <main className="container mx-auto p-4">
            <Outlet />
          </main>
        </div>
      )
}

export default AppLayout