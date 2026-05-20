import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App'
import Details from './component/Details'
import About from './component/About'
import Contact from './component/Contact'
import CarsPage from './component/CarsPage'

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <BrowserRouter>

    <Routes>

      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/details"
        element={<Details />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/cars"
        element={<CarsPage />}
      />

    </Routes>

  </BrowserRouter>
)