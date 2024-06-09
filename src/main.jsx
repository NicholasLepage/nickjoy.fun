import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import NoPage from './ErrorPage/NoPage.jsx'
import Maniaquarium from './maniaquarium_page/Maniaquarium.jsx' 

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route path="/games" element={<App />} />

        <Route path="/games/maniaquarium" element={<Maniaquarium />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
