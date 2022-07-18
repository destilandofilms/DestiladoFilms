import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "../../assests/destilado.jpg";

import "./NavBar.scss";

const NavBar = () => {
    const [ checked, setChecked ] = useState(false);

    console.log(checked)

    return (
        <div className='menu'>
            <label htmlFor='toggle'>&#9776;</label>
            <input type="checkbox" id="toggle" checked={checked} onChange={(e) => setChecked(e.target.checked)} />

            <div className='logo'>
                <NavLink to="/"><img src={Logo} alt='Destilado Films Logo'/></NavLink>
            </div>

            <nav>
                <NavLink to="/eventos" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)} >Eventos</NavLink>
                <NavLink to='/bodas' style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)} >Bodas</NavLink>
                <NavLink to='/musica' style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Musica</NavLink>
                <NavLink to="/bio" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Bio</NavLink>
                <NavLink to="/equipo" style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Equipo</NavLink>
                <NavLink to='/contacto' style={({ isActive }) => (isActive ? { color: '#B39F79' } : null)} onClick={() => setChecked((c) => !c)}>Contacto</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;