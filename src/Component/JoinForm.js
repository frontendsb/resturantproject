import React from "react";
import './joinform.css';

function JoinForm() {
  return (
    <>
      <div id="join-form">
        <div className="container">
          <h2>Join Our Plan</h2>
          <div className="row pt-5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  placeholder="Message"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="submit_btn">Submit</button>
        </div>
      </div>
    </>
  );
}

export default JoinForm;
