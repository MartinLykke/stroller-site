import React from "react";
import "./LandingPage.css";
import img from "./Images/landingPage.jpg";
import img2 from "./Images/landingPage2.jpg";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Wrapper className='section-center container'>
      <article className='content'>
        <h1 className='text-capitalize display-3 animate__animated animate__fadeInLeft'>
          design jeres <br />
          barnevogn
        </h1>
        <p className='animate__animated animate__zoomIn animate__delay-1s'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <a
          href='/'
          className='btn hero-btn animate__animated animate__zoomIn animate__delay-1s'
        >
          shop now
        </a>
      </article>
      <article className='img-container '>
        <img
          src={img}
          alt='woman with stroller'
          className='main-img animate__animated animate__fadeIn'
        />
        <img
          src={img2}
          alt='Couple with stroller'
          className='accent-img animate__animated animate__fadeIn animate__delay-1s'
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-1);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default LandingPage;
