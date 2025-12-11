import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AdministerAthletesPage from './pages/AdministerAthletesPage'
import RegisterAthletePage from './pages/RegisterAthletePage'
import VenuesPage from './pages/VenuePage'
import RegisterVenuePage from './pages/RegisterVenuePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="athletes" element={<AdministerAthletesPage />} />
        <Route path="register-athlete" element={<RegisterAthletePage />} />

        <Route path="venues" element={<VenuesPage />} />
        <Route path="register-venue" element={<RegisterVenuePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
