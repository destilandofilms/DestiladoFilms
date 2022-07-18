import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Eventos from './containers/Eventos/Eventos';
import Bodas from './containers/Bodas/Bodas';
import Music from './containers/Music/Music';
import Bio from './containers/Bio/Bio';
import Equipo from './containers/Equipo/Equipo';
import Contact from './containers/Contact/Contact';

import { VideoProvider } from './context/VideoContext';

import "./App.scss";



function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path='/bodas' element={<Bodas />} />
            <Route path='/musica' element={<Music />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path='/contacto' element={<Contact />} />

          </Routes>

          <footer>© Todos Derrechos Reseverados, DESTILADO FILMS</footer>
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
