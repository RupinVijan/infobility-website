import React from "react";
import emailjs from 'emailjs-com';
import ContactFromDate from "./form-info.json";
import Swal from "sweetalert2";

const ContactForm = () => {
  const maile = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pc7c8rl",
        "template_74cgfsk",
        e.target,
        "user_X81Py2WXDqIFqgsjtm2q1"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
      
      Swal.fire({
        title: 'Thank You!',
        text: 'Your response has been recorded successfully! Our team will be contacting you soon.',
        icon: 'success'
    });
    e.target['name'].value="";
    e.target['email'].value="";
    e.target['ph_no'].value="";
    e.target['message'].value="";
  };
  return (
    <>
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form id="contact-form" action="" onSubmit={maile}>
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="ph_no"
                      type="number"
                      name="ph_no"
                      placeholder="Phone Number"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button type="submit" className="butn bord">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:infobility.ca@gmail.com">{ContactFromDate.email}</a>
                </h5>
                {/* <h5>{ContactFromDate.phone}</h5> */}
              </div>
              {/* <h3 className="wow" data-splitting> */}
                {/* Visit Us. */}
              {/* </h3> */}
              <div className="item">
                {/* <h6> */}
                  {/* {ContactFromDate.location.first} */}
                  {/* <br /> */}
                  {/* {ContactFromDate.location.second} */}
                {/* </h6> */}
              </div>
              <div className="social mt-50">
                <a href="https://www.facebook.com/profile.php?id=100075969739857" className="icon" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="#0" target="_blank" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/infobility.ca/" target="_blank" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
