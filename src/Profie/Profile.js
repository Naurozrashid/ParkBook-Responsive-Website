import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../src/Hooks/useAuth';
import swal from 'sweetalert';

const Profile = () => {
    const { user,handlePhotoChange,handleEmailChange,handleNameChange,handleUserProfile,handlePasswordChange } = useAuth();
    return (
        <div className="container border-shadow mt-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Your Profile</h1>
            
          </div>

          <Form onSubmit={handleUserProfile}>
           <Form.Group className="mb-3" controlId="text">
                <Form.Label className="fw-bold">Name:</Form.Label>
                <Form.Control
                  onBlur={handleNameChange}
                  type="text"
                  placeholder={user.displayName}
                  
                />
              </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                 onBlur={handleEmailChange}
                  type="email"
                  placeholder={user.email}
                
                />
              </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Change Your Password"
                  
                />
              </Form.Group>
            <Form.Group className="mb-3" controlId="text">
                <Form.Label className="fw-bold">Photo Url:</Form.Label>
                <Form.Control
                  onBlur={handlePhotoChange}
                  type="text"
                  placeholder={user.photoURL}
                  
                />
              </Form.Group>

            <Button className="btn btn-warning px-5 py-2" type="submit">
              Update Information
            </Button>
           
          </Form>
        </div>

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={user.photoURL} className="img-fluid" alt="" />
            <h6 className="mt-5">Name:{user.displayName}</h6>
            <h6 className="mt-2">Email:{user.email}</h6>
           {user.phonenumber ?  <h6 className="mt-2">PhoneNumber:{user.phoneNumber}</h6>: <h6 className="mt-2">Phone Number:Not Available</h6>}
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;