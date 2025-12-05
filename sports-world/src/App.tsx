import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdministerAthletesPage from './pages/AdministerAthletesPage'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="athletes" element={<AdministerAthletesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
