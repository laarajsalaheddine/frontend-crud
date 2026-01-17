import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Links } from 'react-router-dom'
import ReservationList from './componenets/reservations/ReservationList'
import ReservationForm from './componenets/reservations/ReservationForm'
import ReservationFormUpdate from './componenets/reservations/ReservationFormUpdate'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#333', marginBottom: '20px' }}>
          <Link to="/reservations" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Reservation</Link>
          <Link to="/serveurs" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Serveurs</Link>

        </nav>

        <Routes>
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/add-reservation" element={<ReservationForm />} />
          <Route path="/edit-reservation/:id" element={<ReservationFormUpdate />} />
          <Route path="/delete-reservation/:id" element={<ReservationList />} />
          {/* 
            Ajouter le mapping des routes des serveurs ici
          */}
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
