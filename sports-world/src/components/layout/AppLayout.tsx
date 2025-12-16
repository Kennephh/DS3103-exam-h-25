import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
      <div className="h-screen bg-gray-100 flex flex-col">

          <nav className="bg-sky-700 p-4 text-white shadow-md shrink-0">
              <div className="container mx-auto flex justify-between items-center">
                  <Link to="/" className="text-xl font-bold flex items-center">
                    <img src="/public/logo.png" alt="SportsWorld Logo" className="h-8 mr-2" />
                    <span className="block sm:hidden">SW: MMA</span>
                    <span className="hidden sm:block">SportsWorld: MMA</span>
                  </Link>
                  <ul className="flex gap-4">
                    <li><Link to="/athletes" className="hover:underline">Athletes</Link></li>
                    <li><Link to="/finance" className="hover:underline">Finance</Link></li>
                    <li><Link to="/venues" className="hover:underline">Venues</Link></li>
                  </ul>
              </div>
          </nav>

        <main className="grow overflow-y-scroll">
          <Outlet />
        </main>

      </div>
    )
}

export default AppLayout