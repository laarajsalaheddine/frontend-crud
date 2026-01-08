import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Links } from 'react-router-dom'
import ReservationList from './componenets/ReservationList'
import ReservationForm from './componenets/ReservationForm'
import ReservationFormUpdate from './componenets/ReservationFormUpdate'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#333', marginBottom: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Liste</Link>
          <Link to="/add-reservation" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Ajouter</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ReservationList />} />
          <Route path="/add-reservation" element={<ReservationForm />} />
          <Route path="/edit-reservation/:id" element={<ReservationFormUpdate />} />
          <Route path="/delete-reservation/:id" element={<ReservationList />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
