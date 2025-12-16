import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AdministerAthletesPage from './pages/AdministerAthletesPage'
import RegisterAthletePage from './pages/RegisterAthletePage'
import VenuePage from './pages/VenuePage'
import RegisterVenuePage from './pages/RegisterVenuePage'
import FinancePage from './pages/FinancePage'
import { AthleteProvider } from './contexts/AthleteContext'
import { FinanceProvider } from './contexts/FinanceContext';
import { VenueProvider } from './contexts/VenueContext'

function App() {

  return (
    <AthleteProvider>
      <FinanceProvider>
        <VenueProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />

              <Route path="athletes" element={<AdministerAthletesPage />} />
              <Route path="register-athlete" element={<RegisterAthletePage />} />
              <Route path="edit-athlete/:id" element={<RegisterAthletePage />} />

              <Route path="venues" element={<VenuePage />} />
              <Route path="register-venue" element={<RegisterVenuePage />} />

              
              <Route path='finance' element={<FinancePage/>} />
              

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </VenueProvider>  
      </FinanceProvider>
    </AthleteProvider>
  );
}

export default App
