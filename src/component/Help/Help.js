import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import helpbanner from '../../images/Home/static-city-green2.png'
import Aboutcar from '../Aboutcar/Aboutcar';
import FNQ from '../FNQ/FNQ';
import Generalinfo from '../Generalinfo/Generalinfo';

const Help = () => {
    return (
        <div className="margin-top text-center">
            <img src={helpbanner} className="img-fluid" alt="" />
            <Router>
        <div>
          <nav className="">
            <Link to="/Help/general">
              <button className="fw-bold btn my-4 link active">
                GENERAL INFORMATION
              </button>
            </Link>

            <Link to="/Help/aboutcar">
              <button className="fw-bold btn my-4 link">
                ABOUT OUR CAR PARKS AND PRODUCTS
              </button>
            </Link>

            <Link to="/Help/fnq">
              <button className="fw-bold btn my-4 link">
                FREQUENTLY ASKED QUESTION
              </button>
            </Link>
           
          </nav>
          <Switch>
            <Route exact path="/Help/general">
              <Generalinfo></Generalinfo>
            </Route>
            <Route path="/Help/aboutcar">
              <Aboutcar></Aboutcar>
            </Route>
            <Route path="/Help/fnq">
            <FNQ></FNQ>
            </Route>
          </Switch>
        </div>
      </Router>
        </div>
    );
};

export default Help;