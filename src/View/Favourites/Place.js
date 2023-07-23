import React from 'react'
import P1 from '../../images/place-1.webp';
import p3 from '../../images/place-3.jpg';
import P4 from '../../images/place-4.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

function Place() {
  AOS.init({
    duration: 1500,
  })
  return (
    <>
    <section id='place' data-aos={"fade-up"}>
      <div className='container'>
        <h2>Visitor's Choice</h2>
        <div className='row pt-5'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
          <div className='place_wrap'>
                    <div className='place_img'>
                        <img className='img-fluid' src={P1} alt='pic'/>
                    </div>
                    <div className='place_cnt'>
                        <h4>Prashad, England</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
          <div className='place_wrap'>
                    <div className='place_img'>
                        <img className='img-fluid' src={P4} alt='pic'/>
                    </div>
                    <div className='place_cnt'>
                        <h4>Prashad, England</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
          <div className='place_wrap'>
                    <div className='place_img'>
                        <img className='img-fluid' src={p3} alt='pic'/>
                    </div>
                    <div className='place_cnt'>
                        <h4>Prashad, England</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Place