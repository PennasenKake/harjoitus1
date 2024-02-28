// App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Navbar from './componets/layouts/navbar';
import Footer from './componets/layouts/footer';
import Home from './componets/pages/home';
import News from './componets/pages/news';
import Details from './componets/pages/details';
import Contact from './componets/pages/contact';
import NotFoundPage from './componets/pages/notFoundPage';  // Huomaa nimi tässä

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />  {/* Huomaa nimi tässä */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
