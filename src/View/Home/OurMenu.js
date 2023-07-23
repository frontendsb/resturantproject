import React from "react";
import M1 from "../../images/menu-1.jpg";
import M2 from "../../images/menu-2.jpg";
import M3 from "../../images/menu-3.jpg";
import M4 from "../../images/menu-4.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

function OurMenu() {
  AOS.init({
    duration: 1500,
  })
  return (
    <>
      <section id="our-menu" data-aos={"fade-up"}>
        <div className="container">
          <h6>Places</h6>
          <h2>Most Favourite</h2>
          <div className="description">
            <p>
              Sed massa ac est ornare pharetra imperdiet nibh. Nunc tellus
              ullamcorper porta scelerisque eu mauris faucibus sed aliquet.
            </p>
          </div>
          <div className="menu_btn pt-3">
            <button>Food</button>
            <button>Service</button>
            <button>Cleaness</button>
            <button>Quality</button>
          </div>
          <div className="row pt-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-3">
              <div className="main">
                <div className="item_pic">
                  <img className="img-fluid" src={M1} alt="pic" />
                </div>
                <div className="overlay">
                    <div>
                    <button>$15</button>
                    <p>ABC Restaurant</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-3">
              <div className="main">
                <div className="item_pic">
                  <img className="img-fluid" src={M2} alt="pic" />
                </div>
                <div className="overlay">
                    <div>
                    <button>$15</button>
                    <p>XYZ Restaurant</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-3">
              <div className="main">
                <div className="item_pic">
                  <img className="img-fluid" src={M3} alt="pic" />
                </div>
                <div className="overlay">
                    <div>
                    <button>$15</button>
                    <p>ABC Restaurant</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-3">
              <div className="main">
                <div className="item_pic">
                  <img className="img-fluid" src={M4} alt="pic" />
                </div>
                <div className="overlay">
                    <div>
                    <button>$15</button>
                    <p>XYZ Restaurant</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurMenu;
