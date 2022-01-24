/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                {/* <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li> */}
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>infobility.ca@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className="cont">
                  <Link href="/contact">
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Get In Touch</span>
                </a>
              </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Infobility Digital</h5>
              </div>
              <ul>
                <li>
                  
                  <div className="sm-post">
                    <p>
                    Website Development
                    </p>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <p>
                    Digital marketing
                    </p>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <p>
                    Website marketing for startup businesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <p>
                    Application Development
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/final-logo.png" alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100075969739857" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/infobility.ca/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2021,
                  <a href="/">InfoBility</a> all Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer