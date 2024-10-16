import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Import your Home component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} /> 
        {/* This will render the Home component at the root ("/") path */}
      </Routes>
    </Router>
  );
};

export default App;
