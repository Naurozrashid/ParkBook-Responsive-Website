import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../src/Hooks/useAuth';
import swal from 'sweetalert';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="container border-shadow mt-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Sign in to Your Account</h1>
            
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address:</Form.Label>
              <Form.Control
                //  onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                // onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me?" />
            </Form.Group>

            <Button className="btn btn-warning px-5 py-2" type="submit">
              Login
            </Button>
           
          </Form>
        </div>

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={user.photoURL} className="img-fluid" alt="" />
            <h6 className="mt-5">Make Your Parking Booking Experience a Lot Brighter</h6>
            <Form.Text className="text-muted">
            with best facilitise best equipments and best parking, you are in safe hands.
            </Form.Text>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;