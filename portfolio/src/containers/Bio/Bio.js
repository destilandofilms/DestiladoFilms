import React from 'react';
import { NavLink } from 'react-router-dom';

import Bottom from "../../assests/bottom.jpg";

import "./Bio.scss";

const Bio = () => {
  return (
    <div className='bio'>
      <div className='b-info'>
        <div className='b-title'>
          <h2>Acerca de</h2>
          <h3>Cinematografo. Cineasta. Narador.</h3>
        </div>

        <div className='b-para'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <NavLink to="/contact">Manda me mensaje →</NavLink>
      </div>

      <div className='b-img'>
        <img src={Bottom} alt="Bottom banner" />
      </div>
    </div>
  );
};

export default Bio;