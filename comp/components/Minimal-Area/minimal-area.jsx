/* eslint-disable @next/next/no-img-element */
import React from "react";

const MinimalArea = (props) => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     var imageDown = document.getElementsByClassName("thumparallax-down");
  //     if (imageDown) {
  //       new simpleParallax(imageDown, {
  //         orientation: "down",
  //         delay: 1,
  //         scale: 1.1,
  //       });
  //     }
  //   }, 1000);
  // }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/aboutt.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Development Process</h4>
              <p className="wow txt" data-splitting>
              Infobility team is composed of Graphic Designers and Full Stack developers. Our creative Team members take the highest level of pride in their work. 
.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6 onClick={()=>{
                    props.setTo("First")
                  }}>
                    <span>1</span> Front-end Web Development
                  </h6>
                  {/* <p>
                  Our team optimizes and develops your website with the latest development languages so that a user can see and interact with them directly.
                  </p> */}
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6 onClick={()=>{
                    props.setTo("Second")
                  }}>
                    <span>2</span> Back-end Web Development
                  </h6>
                  {/* <p>
                  Our team focuses primarily on the development of databases, backend logic, APIs and Servers for your business website. 
                  </p> */}
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6 onClick={()=>{
                    props.setTo("Third")
                  }}>
                    <span>3</span>  Search Engine Optimization
                  </h6>
                  {/* <p>
                  What’s the point of an optimized website if no one can see it? We help our clients in taking their business to another level with Search Engine Optimization. Infobility's strategic approach towards SEO helps Google discover your website. 

                  </p> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
