import React from "react";
import imgLogo from "./Images/logo-transparent-25.png";
import "./Navbar.css";
let houseIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-home bi d-block mx-auto mb-1'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='#ffffff'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <polyline points='5 12 3 12 12 3 21 12 19 12' />
    <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
    <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
  </svg>
);
let packageIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-package bi d-block mx-auto mb-1'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='#ffffff'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <polyline points='12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3' />
    <line x1='12' y1='12' x2='20' y2='7.5' />
    <line x1='12' y1='12' x2='12' y2='21' />
    <line x1='12' y1='12' x2='4' y2='7.5' />
    <line x1='16' y1='5.25' x2='8' y2='9.75' />
  </svg>
);
let phoneIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-phone bi d-block mx-auto mb-1'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='#ffffff'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
  </svg>
);
function Navbar() {
  return (
    <>
      <header>
        <div className='px-3 py-2 bg-dark text-white'>
          <div className='container'>
            <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
              <a
                href='/'
                className='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'
              >
                <a className='navbar-brand' href='/'>
                  <img src={imgLogo} className='img-fluid' alt='logo'></img>
                </a>
              </a>

              <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
                <li>
                  <a href='/' className='nav-link text-secondary'>
                    {houseIcon}
                    Hjem
                  </a>
                </li>
                <li>
                  <a href='/' className='nav-link text-white'>
                    {packageIcon}
                    Produkter
                  </a>
                </li>
                <li>
                  <a href='/' className='nav-link text-white'>
                    {phoneIcon}
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
