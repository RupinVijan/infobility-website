/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro3 = (props) => {
  return (
    <header  className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img src={props.imgg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
              <h6>{props.topic}</h6>
              </div>
              <h1 className="mb-10 fw-600">{props.heading}</h1>
              <p>
                {props.content}
              </p>
              <Link href="/contact">
                <a className="butn bord curve mt-30">
                  <span>Get In Touch</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </header>
  );
};

export default Intro3