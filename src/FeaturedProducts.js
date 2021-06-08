import React from "react";
import "./FeaturedProducts.css";
import img1 from "./Images/featured1.jpg";
import img2 from "./Images/featured2.jpg";
import img3 from "./Images/featured3.jpg";

function FeaturedProducts() {
  return (
    <div className='container center '>
      <h1 className='text-center py-4'>Featured products</h1>
      <hr class='line' />
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <img className='card-img-top ' src={img1} alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' className='btn btn-primary'>
                  Se mere
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <img className='card-img-top' src={img2} alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' className='btn btn-primary'>
                  Se mere
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <img className='card-img-top' src={img3} alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' className='btn btn-primary'>
                  Se mere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
