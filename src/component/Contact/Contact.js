import React from 'react';
import img2 from '../../images/Home/phone.svg'
import img1 from '../../images/Home/chat.svg'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e){
    e.preventDefault();
 
    emailjs.sendForm('service_vepc61l', 'template_jpqt1dk', e.target, 'user_C0IncJjmkwKSZFcyCYOLA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <div>
             <h1 className="intro-color text-center">Contact</h1>
             <h4 className="intro-color-2 text-center">We would like to hear from you. How can we help?</h4>


             {/* grid */}
            <div className="container">
                <div class="row g-4 align-items-center d-flex justify-content-center">
               <div class="col-lg-6">
                  <div className="user-card mb-3">
                       <div class="row g-4 align-items-center d-flex justify-content-center align-items-center text-center">
                      <div className="col-12 col-md-6 col-lg-12 d-inline-block contact-card-container pt-5">
                          <img class="img-fluid" src={img1} alt="" />
                     </div>
                     <div className="col-12 col-md-6 col-lg-12 mb-3 d-inline-block contact-card-container">
                         <div className="user-card-title">
                         <span>Check with us</span>
                         </div>
                         <div className="user-card-text">
                             <span>Write to us at <a target="_blank" href="https://mail.google.com/mail/u/0/#">info@parzoon.com</a> or start the chat
                              Monday to Friday 9 a.m. to 6 p.m.</span>
                         </div>
                     </div>
                   </div>
                  </div>
                  <div className="user-card">
                       <div class="row g-4 align-items-center d-flex justify-content-center align-items-center text-center">
                      <div className="col-12 col-md-6 col-lg-12 d-inline-block contact-card-container pt-5">
                          <img class="img-fluid" src={img2} alt="" />
                     </div>
                     <div className="col-12 col-md-6 col-lg-12 mb-3 d-inline-block contact-card-container">
                         <div className="user-card-title">
                         <span>Phone</span>
                         </div>
                         <div className="user-card-text">
                             <span>Monday to Friday 9 a.m. to 6 p.m. <a target="_blank" href="tel:0203 318 5531">0203 318 5531</a>
                           </span>
                         </div>
                     </div>
                   </div>
                  </div>
                    
                </div>

                <div class="col-lg-6">
                      <div className="container signin my-3" style={{ height: '31rem', width: '24rem' }}>
                <h4 className="text-center pt-3">Send message</h4>
                <p className="text-center mb-3"> We will contact you within 2 hours</p>
                <form onSubmit={sendEmail} className="row g-3">
                    <div className="col-md-6">
                        <label for="inputName4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputNamel4" name="name" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name="email"  />
                    </div>
                    <div className="col-md-12">
                        <label for="inputName4" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="inputNamel4" name="phone" />
                    </div>
                    
                   
                    <div className="col-md-12">
                       <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                       </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="btn brdr5 font-color">Book Now</button>
                    </div>
                </form>
            </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;