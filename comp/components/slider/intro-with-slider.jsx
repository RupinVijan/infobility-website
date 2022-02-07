import React from "react";
import introData from "./intro.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {

  const [load, setLoad] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document
          .querySelector(".swiper-pagination")
          .innerHTML.replace(" / ", "");
      }
      window.addEventListener("scroll", () => {
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
          document.querySelector(".fixed-slider .caption").style.transform =
            "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
          document.querySelector(".fixed-slider .caption").style.opacity =
            1 - scrolled / 600;
        }
        if (document.querySelector(".fixed-slider .capt .parlx")) {
          document.querySelector(".fixed-slider .capt .parlx").style.transform =
            "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
          document.querySelector(".fixed-slider .capt .parlx").style.opacity =
            1 - scrolled / 600;
        }
      });
    })
  }, [])



  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  let slide_i = 0;

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ?
          <Swiper
          style={{width:'100%'}}
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              slide_i++ >= 0 &&
              <SwiperSlide key={slide.id} className="swiper-slide" style={{width:'100%'}}>
                <div 
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` , width:'100%' }}
                  data-overlay-dark="1"
                >
                  <div className="container" >
                    <div className="row justifyyy-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30" data-aos="zoom-in-left" data-aos-easing="ease-in" data-aos-delay="300">
                          <h1 className="color-font"
                            style={slide_i==2 ? { fontSize: '55px', lineHeight: 1.5 } : {}}>{slide_i==2 ? <span>Create Your Website, <br />Your Way</span> : slide.title}</h1>
                          {/* {slide?.content && <p>{slide.content}</p>} */}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          : null
        }
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        {/* <div ref={paginationRef} className="swiper-pagination top botm"></div> */}

        <div className="social-icon">
          <a href="https://www.facebook.com/profile.php?id=100075969739857">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* <a href="#0">
            <i className="fab fa-twitter"></i>
          </a> */}
          <a href="https://www.instagram.com/infobility.ca/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/infobility-canada/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
