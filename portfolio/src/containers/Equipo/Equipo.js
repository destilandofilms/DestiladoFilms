import React from 'react';

import "./Equipo.scss";


const Equipo = () => {
  return (
    <div className='equipo'>
      <div className='e-exp'>
        <h2>Equipo</h2>
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

      <div className='e-list'>
        <div className='cameras'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.5 11c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-8zm-4 3h-8v-1h8v1zm-3.757-10h2.757v2h-2.103c-.887 0-1.245.423-1.85 1h-3.047l2.121-2.121c.563-.563 1.326-.879 2.122-.879zm9.817 1c0 1.104-.896 2-2 2h-4.06v-4h4.06c1.104 0 2 .895 2 2zm3.94 8.236v3.528l-2-1v-1.528l2-1zm2-3.236l-6 3v4l6 3v-10z"
            />
          </svg>

          <div className='text'>
            <h3>Cameras</h3>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
          </div>
        </div>

        <div className='Lentes'>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm-7.363 18.764c1.828 1.989 4.451 3.236 7.363 3.236h.004l-4.618-7.998-2.749 4.762zm16.023-1.764h-9.233l2.749 4.762c2.767-.615 5.104-2.378 6.484-4.762zm-18.201-8c-.298.947-.459 1.955-.459 3 0 1.823.489 3.533 1.343 5.005l2.889-5.003-.001-.002.003-.002 1.731-2.998h-5.506zm18.203-1.997l-4.617 7.997h5.496c.298-.947.459-1.955.459-3 0-1.82-.487-3.526-1.338-4.997zm-6.927 1.997h-3.461l-1.733 3.002 1.731 2.998h3.464l1.731-2.999-1.732-3.001zm2.887 1.001l2.747-4.758c-1.828-1.992-4.452-3.242-7.366-3.243l4.619 8.001zm-6.792-7.764c-2.769.613-5.109 2.377-6.49 4.763h9.24l-2.75-4.763z"
            />
          </svg>

          <div className='text'>
            <h3>Lentes</h3>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
          </div>
        </div>

        <div className='accesorios'>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fillRule="nonzero"
            />
          </svg>

          <div className='text'>
            <h3>Accesorios</h3>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
          </div>
        </div>

        <div className='patrocinadores'>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
          >
            <path
              d="M3.5 16.343l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm-.993-3.343h-.01c.022-4.906-2.246-2.772-2.246-6.676 0-1.507.983-2.324 2.248-2.324 1.869 0 3.169 1.787 1.399 5.129-.581 1.099.62 1.359 1.91 1.657 1.118.258 1.192.805 1.192 1.751v2.463h-4.493v-2zm-19.507 2v-2.463c0-.946.074-1.493 1.192-1.751 1.29-.298 2.491-.558 1.91-1.657-1.77-3.342-.47-5.129 1.399-5.129 1.265 0 2.248.817 2.248 2.324 0 3.904-2.268 1.77-2.246 6.676h.005v2h-4.508zm6 0v-2.623c0-1.258.1-1.985 1.588-2.329 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l.001 2.619h-12z"
            />
          </svg>

          <div className='text'>
            <h3>Patrocinadores</h3>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
            <p>I’m an item. ​Click here to edit me.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipo;