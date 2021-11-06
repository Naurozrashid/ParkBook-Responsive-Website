import React from 'react';
import img1 from '../../images/Home/parkingzoon.jpg'

const Generalinfo = () => {
    return (
        <>
        <div class="container text-center">
            <h3 class=" mt-5 fw-bolder fcolor">General Information</h3>
            
            <div class="row g-4 align-items-center d-flex justify-content-center">


                <div class="col-lg-6">
                    <img class="img-fluid" src={img1} alt="" />
                </div>


                <div class="col-lg-6 text-start">
                   <div class="accordion" id="accordionExample">

      <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h5 class="fw-bold py-2 fcolor">What is Parkzoon</h5>
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body fw-light text-secondary">
            Parkzoon is Europe's leading website for booking parking spaces online.
            <br/>
            <br/>
            At the beginning, Parkzoon started as an Software Engineering project and, in 2021, what started as something fictitious became a real company. Since then, our business model has been adapted to customer's needs in order to offer the products they require. Not only do we help our users to obtain great discounts for their parking, but we also help car parks to maximise the profitability of their infrastructures without any risk.
        </div>
    </div>
    </div>
    </div>
            </div>
        </div>
        </div>








        </>
    );
};

export default Generalinfo;