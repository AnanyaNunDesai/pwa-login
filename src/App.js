import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import statements
import LoginPage from '../src/pages/loginpage';
import LogoPage from '../src/pages/logopage';

function App() {
  return (
    <Router>
      <Routes> {/* Change Switch to Routes */}
        <Route path="/" element={<LoginPage />} /> {/* Use element prop instead of component */}
        <Route path="/logo" element={<LogoPage />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
