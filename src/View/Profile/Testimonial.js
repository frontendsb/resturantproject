import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ci from "../../images/testi_avatar.png";
import C2 from "../../images/testi_avatar 2.png";
import C3 from "../../images/testi_avatar_02.png";
import C4 from "../../images/testi_avatar_03.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function Testimonial() {
  AOS.init({
    duration: 1500,
  })

  var settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 500,
          arrows: false,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="testimonial" data-aos={"fade-up"}>
        <div className="container">
          <h2>See What Our Clients Say</h2>

          <Slider {...settings}>
            <div className="item">
              <div className="wrap">
                <div className="client_p">
                  <img className="img-fluid" src={Ci} alt="pic" />
                </div>
                <div className="prfs">
                  <h6>Charlie Low</h6>
                  <p>Teacher</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sagittis porttitor neque sit amet hendrerit. In suscipit semper
                sodales.
              </p>
              <ul>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
              </ul>
            </div>
            <div className="item">
              <div className="wrap">
                <div className="client_p">
                  <img className="img-fluid" src={C2} alt="pic" />
                </div>
                <div className="prfs">
                  <h6>Charlie Low</h6>
                  <p>Teacher</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sagittis porttitor neque sit amet hendrerit. In suscipit semper
                sodales.
              </p>
              <ul>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
              </ul>
            </div>
            <div className="item">
              <div className="wrap">
                <div className="client_p">
                  <img className="img-fluid" src={C3} alt="pic" />
                </div>
                <div className="prfs">
                  <h6>Charlie Low</h6>
                  <p>Teacher</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sagittis porttitor neque sit amet hendrerit. In suscipit semper
                sodales.
              </p>
              <ul>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
              </ul>
            </div>
            <div className="item">
              <div className="wrap">
                <div className="client_p">
                  <img className="img-fluid" src={C4} alt="pic" />
                </div>
                <div className="prfs">
                  <h6>Charlie Low</h6>
                  <p>Teacher</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sagittis porttitor neque sit amet hendrerit. In suscipit semper
                sodales.
              </p>
              <ul>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
              </ul>
            </div>
            <div className="item">
              <div className="wrap">
                <div className="client_p">
                  <img className="img-fluid" src={Ci} alt="pic" />
                </div>
                <div className="prfs">
                  <h6>Charlie Low</h6>
                  <p>Teacher</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sagittis porttitor neque sit amet hendrerit. In suscipit semper
                sodales.
              </p>
              <ul>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
              </ul>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
