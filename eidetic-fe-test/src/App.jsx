import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ConversationsPage from './pages/ConversationsPage.jsx'
import StartDetailPage from './pages/StartDetailPage.jsx'

import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<ConversationsPage />} />
        <Route path="start/:id" element={<StartDetailPage />} />
      </Routes>
    </>
  )
}

export default App
