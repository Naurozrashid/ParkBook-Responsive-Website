import React from 'react';
import './Home.css'
import banner from '../../images/Home/static-city-green.png'
import google from '../../images/Home/android_badge_EN.png'
import apple from '../../images/Home/ios_badge_EN.png'
import download from '../../images/Home/app-screenshots.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="intro-color">Park before arriving</h1>
                <h4 className="intro-color-2">More than 1,000,000 drivers have now booked with Parkzoon</h4>

                 {/* input section */}
                 <section className="sub-header mt-5 container rounded rounded-5">
                 <div className="input-group container my-5">
                 <div className="d-flex align-items-center justify-content-center my-5">
                <div className="ms-4 me-2 ">
                <input type="text" class="form-control py-3 padding  border-info-home " placeholder="Where do you want to park?" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="form-floating ">
                    <div className="py-3 ms-2">
                    <input type="date" class="form-control py-3 pt-4 padding-date border-info-home" pl
                  aceholder="Where do you want to park?" aria-label="Username" aria-describedby="basic-addon1"/>
                
                    </div>
                    <label className="text-center ps-5" for="floatingInputInvalid">ARRIVAL</label>
               
                </div>
                <div className="form-floating ">
                    <div className="py-3 ms-2">
                    <input type="date" class="form-control py-3 pt-4 padding-date border-info-home" pl
                  aceholder="Where do you want to park?" aria-label="Username" aria-describedby="basic-addon1"/>
                
                    </div>
                    <label className="text-center ps-5" for="floatingInputInvalid">DEPARTURE</label>
               
                </div>
                {/* <div className="py-3 ms-2 ">
                <input type="date" class="form-control py-3 padding-date" placeholder="Where do you want to park?" aria-label="Username" aria-describedby="basic-addon1"/>
                <label className="text-center ps-5" for="floatingInputInvalid">ARRIVAL</label>
                </div> */}
                <div className="py-3 ms-2 ">
                    <Link to="/login" className="nav-link">
              <button type="button" class="btn brdr font-color5 px-5 py-2">SEARCH</button>
            </Link>
                
                </div>

                 </div>
                 </div>
                    </section>
                <img src={banner} className="img-fluid" alt="" />

               
              {/* counter section */}

                
                <h3 className="intro-color mt-5">Choose a car park, book and start saving!</h3>
                <section>
                    <div className="container text-center px-0 mt-5">
                        <div className="row no-gutters mx-md-5 mx-0 justify-content-center">
                            <div className="col-2 col-lg-2">
                                
                                    <div className="d-block mb-4">
                                        <span className="number">2</span>
                                       
                                    </div>
                                    <h3 className="light">
                                    Cities
                                </h3>
                            </div>
                            <div className="col-5 col-md-4 col-lg-3">
                                
                                    <div className="d-block mb-4">
                                        <span className="number">2</span>
                                        <span className="number">0</span>
                                        <span className="number">0</span>
                                       
                                    </div>
                                    <h3 className="light">
                                    Parking
                                </h3>
                            </div>
                            <div className="col-5 col-md-4 col-lg-3">
                                
                                    <div className="d-block mb-4">
                                        <span className="number">4</span>
                                        <span className="number">3</span>
                                        <span className="number">5</span>
                                       
                                    </div>
                                    <h3 className="light">
                                    Parking Slot
                                </h3>
                            </div>
                            <div className="col-5 col-md-4 col-lg-3">
                                
                                    <div className="d-block mb-4">
                                        <span className="number">1</span>
                                        <span className="number">2</span>
                                        <span className="number">0</span>
                                       
                                    </div>
                                    <h3 className="light">
                                    Airports, harbours and stations
                                </h3>
                            </div>

                        </div>
        
                    

                    </div>
                </section>
                {/* download app section */}
                <section className="download-bg">
                    <div className="container">
                        <div className="row no-gutters align-items-center">
                            <div className="col-12 col-md-7 text-center text-md-left mb-5 font-download">
                                <h1>Book when you want</h1>
                                <h3> Download our app </h3>
                                <div className="list-inline d-none d-sm-block mt-5">
                                    <li className="list-inline-item mr-2 mr-md-3">
                                        <img className="img-home-download-app" src={google} alt="" />
                                    </li>
                                    <li className="list-inline-item mr-2 mr-md-3">
                                        <img className="img-home-download-app" src={apple} alt="" />
                                    </li>

                                </div>

                            </div>
                             <div className="col-10 col-md-5 mx-auto">
                                 <img className="img-fluid" src={download} alt="" />

                             </div>
                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default Home;