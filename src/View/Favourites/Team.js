import React from "react";
import T1 from "../../images/team-1.webp";
import T2 from "../../images/team-2.webp";
import T3 from "../../images/team-3.webp";
import AOS from 'aos';
import "aos/dist/aos.css";

function Team() {
  AOS.init({
    duration: 1500,
  })
  return (
    <>
      <section id="team" data-aos={"fade-up"}>
        <div className="container">
          <h2>Our Team Members</h2>
          <div className="row pt-5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3">
              <div className="content">
                <div className="content-overlay" />
                <img className="content-image" src={T1} alt="pic" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Annette Black</h3>
                  <p className="content-text">
                    Duis varius in interdum ut. Viverra tristique odio nunc
                    dolor, sed suscipit diam massa lobortis.
                  </p>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3">
            <div className="content">
                <div className="content-overlay" />
                <img className="content-image" src={T2} alt="pic" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Annette Black</h3>
                  <p className="content-text">
                    Duis varius in interdum ut. Viverra tristique odio nunc
                    dolor, sed suscipit diam massa lobortis.
                  </p>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
            <div className="content">
                <div className="content-overlay" />
                <img className="content-image" src={T3} alt="pic" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Annette Black</h3>
                  <p className="content-text">
                    Duis varius in interdum ut. Viverra tristique odio nunc
                    dolor, sed suscipit diam massa lobortis.
                  </p>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="m_link">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
