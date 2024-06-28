
import HomePage from './views/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

const App: React.FC = () => {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
  </Router>
  )
}

export default App
