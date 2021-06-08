import React from "react";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className='position-relative overflow-hidden text-center bg-light'>
        <div className='col-md-5 p-lg-5 mx-auto my-5'>
          <h1 className='display-4 fw-normal animate__animated animate__fadeInLeft'>
            Punny headline
          </h1>
          <p className='lead fw-normal animate__animated animate__zoomIn animate__delay-1s'>
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a
            className='btn btn-outline-secondary fw-normal animate__animated animate__zoomIn animate__delay-1s'
            href='/'
          >
            Se produkter
          </a>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
