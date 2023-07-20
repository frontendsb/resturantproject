import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg1 from "../../images/bg-1.jpg";
import Bg2 from "../../images/bg-2.jpg";
import Bg3 from "../../images/bg-3.jpg";

function Banner() {
    var settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <>
      <section id="banner-section">
        <h2>Restaurant</h2>
        <Slider {...settings}>
          <div className="item">
            <img className='img-fluid' src={Bg1} alt="bg" />
          </div>
          <div className="item">
            <img className='img-fluid' src={Bg2} alt="bg" />
          </div>
          <div className="item">
            <img className='img-fluid' src={Bg3} alt="bg" />
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Banner;
