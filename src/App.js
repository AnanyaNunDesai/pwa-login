import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import statements
import LoginPage from '../src/pages/loginpage';
import LogoPage from '../src/pages/logopage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/logo" element={<LogoPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
