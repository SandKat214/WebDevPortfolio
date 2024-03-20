// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';
import ArtPage from './pages/ArtPage.js';
import AddArtPageForm from './pages/AddArtPageForm.js';
import EditArtPageForm from './pages/EditArtPageForm.js';


// Renders the content in Routes, using State.
function App() {

  const [artItem, setArtItemToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Katherine Sandeen<img src="android-chrome-192x192.png" alt="Katherine Sandeen"/></h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/topics" element={<TopicsPage />} />

                    <Route path="/gallery" element={<GalleryPage />} />

                    <Route path="/order" element={<OrderPage />} />

                    <Route path="/staff" element={<StaffPage />} />
                    
                    <Route path="/art" element={<ArtPage setArtItem={setArtItemToEdit}/>} />

                     <Route path="/create" element={<AddArtPageForm />} />   

                     <Route path="/update" element={<EditArtPageForm artItemToEdit={artItem} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Katherine Sandeen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;