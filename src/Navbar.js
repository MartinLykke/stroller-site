import React from "react";
import imgLogo from "./Images/logo-transparent-25.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header>
        <div class='px-3 py-2 bg-dark text-white'>
          <div class='container'>
            <div class='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
              <a
                href='/'
                class='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'
              >
                {" "}
                <a className='navbar-brand' href='/'>
                  <img src={imgLogo} className='img-fluid' alt='logo'></img>
                </a>
              </a>

              <ul class='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
                <li>
                  <a href='#' class='nav-link text-secondary'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' class='nav-link text-white'>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href='#' class='nav-link text-white'>
                    Orders
                  </a>
                </li>
                <li>
                  <a href='#' class='nav-link text-white'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' class='nav-link text-white'>
                    Customers
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
