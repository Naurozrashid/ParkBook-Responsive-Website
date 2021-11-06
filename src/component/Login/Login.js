import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from "../../images/login/logn14.png";
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import swal from 'sweetalert';

const Login = () => {
  const { signInUsingGoogle,user,handleEmailChange,handlePasswordChange,handleLogin,error} = useAuth();
  const history = useHistory();
  const location = useLocation();
    const redirect_uri = location.state?.from || '/home';



  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
          swal("Login", "Successful", "success");
          history.push(redirect_uri)
        })
}
    return (
        <div className="container border-shadow mt-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Sign in to Your Account</h1>
            <div className="authentication-icon my-3">
              <button onClick={handleGoogleLogin} className="border-0 bg-white">
                <i className="fab fa-google-plus-g p-3 text-danger"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-facebook-square p-3 text-primary"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-linkedin p-3 text-info"></i>
              </button>
            </div>
            <p>or use email for login</p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address:</Form.Label>
              <Form.Control
                 onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me?" />
            </Form.Group>

           <p>{error}</p>

            <Button className="btn btn-warning px-5 py-2" type="submit">
              Login
            </Button>
            <p className="text-center pt-3 m-0">
              dont have an account? <Link to="/register">Register Now</Link>
            </p>
          </Form>
        </div>

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={logo} className="img-fluid" alt="" />
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

export default Login;