import React from 'react';
import img1 from '../../images/Home/aboutparking.jpg'
import img2 from '../../images/Home/aboutcarproduct.png'

const Aboutcar = () => {
    return (
        <>
        {/* about our car parks */}
            <div class="container text-center">
            <h3 class=" mt-5 fw-bolder fcolor">ABOUT OUR CAR PARKS</h3>
            
            <div class="row g-4 align-items-center d-flex justify-content-center">


                <div class="col-lg-6">
                    <img class="img-fluid" src={img1} alt="" />
                </div>


                <div class="col-lg-6 text-start">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="fw-bold py-2 fcolor">What kind of car parks can I find at Parzoon?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   We currently collaborate with more than 1600 car parks in seven European countries (Spain, France, Italy, Portugal, Belgium, Holland and Germany). Each car park has a personalised file with general information about its operation, characteristics, location, photos, maximum permitted height, access, available products and booking validation instructions both on arrival and departure.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 class="fw-bold py-2 fcolor">What is Valet Parking and how does it work?</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                  A Valet Car Park is a car park that offers a valet parking service, i.e. a pick-up and drop-off service at a specific point at an airport, station or port. If you have booked or are interested in using this convenient service, the way it works is very simple: on the day of your arrival, you must drive to the agreed meeting point. Generally, your booking will provide you with a contact number that you should call to let them know the time of your arrival and to arrange the meeting point. This way, by the time you arrive at the terminal, a member of staff will be waiting to pick up your vehicle and drive it to the car park for you. On your return, you will need to inform the car park of your landing as you did on your departure day so that the staff can bring your vehicle back.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 class="fw-bold py-2 fcolor">How does a car park with a shuttle service work?</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   Car parks with a shuttle service operate like a City Centre Car Park. They are usually located in the vicinity of an airport, station or port, and include a shuttle bus service to the departure gate or terminal.
                                    <br/>
                                   <br/>
                                  The operation of this type of car park is uncomplicated: on the day of your arrival, you must drive to the car park, park, validate your reservation with the staff, and then leave on the next shuttle bus. On the day of your return, you will have to call the car park for the shuttle bus to come and pick you up at the same place where it left you on the day of your departure, to take you back to the car park with your vehicle.

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h5 class="fw-bold py-2 fcolor">Car Parks in Limited Traffic or Restricted Traffic Access Areas</h5>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   In some cities, there are areas that are restricted to certain vehicles, or where access is only allowed to residents, or where circulation is limited at specific times, as well as other restrictions. With a Parkzoon reservation, however, you can access the car park you have booked even if it is in one of these areas. To do this, read the car park information sheet carefully and check the conditions of each area to find out how to obtain the necessary authorisation and access these car parks without any surprises later. If you have any doubts, you can consult Customer Service.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* about our product */}
        <div class="container text-center">
            <h3 class=" mt-5 fw-bolder fcolor">ABOUT OUR PRODUCTS</h3>
            
            <div class="row g-4 align-items-center d-flex justify-content-center">


                <div class="col-lg-6">
                    <img class="img-fluid" src={img2} alt="" />
                </div>


                <div class="col-lg-6 text-start">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="fw-bold py-2 fcolor">What Products do Parkzoon offer?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                  The products and prices that we offer on the Parkzoon platform are those that each car park has decided to publish.
                                 <br/>
                                On our website, in each car park's page, you can consult its price list by clicking on the "See all prices" button and, in our app, you can click on "Passes by hours/days".
                                 <br/>
                                In both cases, the button is located below the summary of the specific car park, under the description. Within these sections, you will be able to consult the complete list of products offered by that car park, along with their corresponding rates. Depending on the car park, you will find different products:
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 class="fw-bold py-2 fcolor">Multi-Location pass</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                   A multi-location pass is the most flexible and comprehensive product we offer. At the moment, it is only available in the cities of Chittagong. Please find below the respective links on our websites for more information on its features.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 class="fw-bold py-2 fcolor">Monthly Passes</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                  At Parkzoon, we offer rates adapted to those users who need a parking space for long stays or permanent stays. The car parks with this type of offer available can be found in the Monthly Passes section, next to the search engine and the other Passes and Airports sections.
                                    <br/>
                                   <br/>
                                   Our long-stay passes require a minimum stay of 1, 6 or 12 months, depending on the offer of each car park. But don't panic: this length does not entail any type of surcharge in the rate. You only have to sign a contract with the car park in which you guarantee that you will use the parking space during the established months.
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

export default Aboutcar;