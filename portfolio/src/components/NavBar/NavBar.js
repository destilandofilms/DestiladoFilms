import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./NavBar.scss";

const NavBar = () => {
    const { checked, setChecked } = useState(false);

    return (
        <div className='menu'>
            <label htmlFor='toggle'>&#9776;</label>
            <input type="checkbox" id="toggle" checked={checked} onChange={(e) => setChecked(e.target.checked)} />

            <div className='logo'>
                <NavLink to="/"><img src='#' alt='Destilado Films Logo'/></NavLink>
            </div>

            <nav>
                <NavLink to="/eventos" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)} >Eventos</NavLink>
                <a href='#0' onClick={() => setChecked((c) => !c)} >Bodas</a>
                <a href='#0' onClick={() => setChecked((c) => !c)}>Musica</a>
                <NavLink to="/bio" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Bio</NavLink>
                <NavLink to="/equipo" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Equipo</NavLink>
                <a href='#0' onClick={() => setChecked((c) => !c)}>Contacto</a>
            </nav>
        </div>
    );
};

export default NavBar;