import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                <a href="#0" onClick={() => setChecked((c) => !c)} >Eventos</a>
                <a href='#0' onClick={() => setChecked((c) => !c)} >Bodas</a>
                <a href='#0' onClick={() => setChecked((c) => !c)}>Musica</a>
                <NavLink to="/bio" onClick={() => setChecked((c) => !c)}>Bio</NavLink>
                <NavBar to="/equipo" onClick={() => setChecked((c) => !c)}>Equipo</NavBar>
                <a href='#0' onClick={() => setChecked((c) => !c)}>Contacto</a>
            </nav>
        </div>
    );
};

export default NavBar;