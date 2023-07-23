import React, { useState } from "react";
import "./joinform.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function JoinForm() {
  AOS.init({
    duration: 1500,
  })

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone, message } = userData;

    if (firstName && lastName && email && phone && message) {
      const res = fetch(
        "https://feedbackpost-64171-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <>
      <div id="join-form" data-aos={"fade-up"}>
        <div className="container">
          <h2>Join Our Plan</h2>
          <form method="POST">
            <div className="row pt-5">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Your Email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    rows={3}
                    defaultValue={""}
                    placeholder="Message"
                    value={userData.message}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="submit_btn" onClick={submitData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default JoinForm;
