import React from "react";
import M1 from "../../images/menu-1.webp";
import M2 from "../../images/menu-2.webp";
import M3 from "../../images/menu-3.webp";
import M4 from "../../images/menu-4.webp";

function OurMenu() {
  return (
    <>
      <section id="our-menu">
        <div className="container">
          <h6>Our Menu</h6>
          <h2>Special Menu</h2>
          <div className="description">
            <p>
              Sed massa ac est ornare pharetra imperdiet nibh. Nunc tellus
              ullamcorper porta scelerisque eu mauris faucibus sed aliquet.
            </p>
          </div>
          <div className="menu_btn">
            <button>Beverages</button>
            <button>Starters</button>
            <button>Breakfasts</button>
            <button>Desserts</button>
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
                    <p>Dumplings with Meat</p>
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
                    <p>Dumplings with Meat</p>
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
                    <p>Dumplings with Meat</p>
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
                    <p>Dumplings with Meat</p>
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
