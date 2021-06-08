import React from "react";
import "./Footer.css";
import imgLogo from "./Images/logo-transparent-25.png";
let instagram = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-brand-instagram'
    width='40'
    height='40'
    viewBox='0 0 24 24'
    stroke-width='1'
    stroke='#00abfb'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <rect x='4' y='4' width='16' height='16' rx='4' />
    <circle cx='12' cy='12' r='3' />
    <line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
  </svg>
);
function Footer() {
  return (
    <div class='bg-primary-7 text-primary-5'>
      <footer class='text-center text-lg-start bg-light '>
        <section class='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div class='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href='' class='me-4 '>
              <i class='bi bi-facebook h1'></i>
            </a>
            <a href='' class='me-4 '>
              <i class='bi bi-instagram h1'></i>
            </a>
          </div>
        </section>

        <section class=''>
          <div class='container text-center text-md-start mt-5'>
            <div class='row mt-3'>
              <div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>
                  <img src={imgLogo}></img>
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' class='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    Laravel
                  </a>
                </p>
              </div>

              <div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Brugbare links</h6>
                <p>
                  <a href='#!' class='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' class='text-reset'>
                    Help
                  </a>
                </p>
              </div>

              <div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 class='text-uppercase fw-bold mb-4'>Kontakt</h6>
                <p>
                  <i class='fas fa-home me-3'></i> New York, NY 10012, US
                </p>
                <p>
                  <i class='fas fa-envelope me-3'></i>
                  info@example.com
                </p>
                <p>
                  <i class='fas fa-phone me-3'></i> + 01 234 567 88
                </p>
                <p>
                  <i class='fas fa-print me-3'></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class='text-center p-4'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a class='text-reset fw-bold' href='https://mdbootstrap.com/'></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
