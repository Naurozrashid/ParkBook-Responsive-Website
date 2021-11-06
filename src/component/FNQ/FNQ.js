import React from 'react';
import img from '../../images/Home/fnq.jpg'

const FNQ = () => {
    return (
         <div class="container text-center">
            <h3 class=" mt-5 fw-bolder fcolor">Frequently Asked Questions</h3>
            <p>FAQ</p>
            <div class="row g-4 align-items-center d-flex justify-content-center">


                <div class="col-lg-6">
                    <img class="img-fluid" src={img} alt="" />
                </div>


                <div class="col-lg-6 text-start">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="fw-bold py-2 fcolor">Will I have a place allocated with a Parclick reservation?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   In general, the Parclick reservation does not include a specifically allocated parking space. Some car parks do have specific spaces allocated to Parclick users, or the staff will tell you where you can leave your vehicle when you arrive. For these car parks, you will find the appropriate instructions on the booking voucher that you will receive in the purchase confirmation email.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 class="fw-bold py-2 fcolor">How can I find out if a car park is secure?</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   Vehicle security is one of our priorities. All the car parks with which we collaborate are insured. In addition, a large majority of them have different security and surveillance systems (on-site surveillance and CCTV).
                                   <br/>
                                   <br/>
                                   The car parks with surveillance will be marked in the corresponding advert on our platform with this drawing of a security camera.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 class="fw-bold py-2 fcolor">Do I have to leave my keys in the car park?</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   In general, it is not necessary to leave the keys with the car park staff. However, some small car parks require them in order to be able to relocate cars in the event a lot of traffic.
                                    <br/>
                                   <br/>
                                   The car parks that have this feature will be marked in the advert on our website and app with a drawing of keys, in the top right-hand corner of each card.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h5 class="fw-bold py-2 fcolor">Can I access a car park with a trailer, luggage rack or bicycle rack?</h5>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   No. The reservation is only valid for the type of vehicle selected, without a trailer or any object whose installation alters the vehicle's factory height or width.
                                    <br/>
                                   <br/>
                                   Before booking your parking space, check the dimensions of each vehicle category (in the Vehicle section, next to the search engine), and the maximum height allowed in the car park. If you arrive with a trailer, the car park reserves the right to charge your trailer as an additional vehicle at on-site sales prices, or you may even be refused entry to the car park.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FNQ;