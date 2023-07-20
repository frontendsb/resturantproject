import React from "react";

function BookTable() {
  return (
    <>
      <section id="book-table">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="table_cnt">
                <h6>CONTACT US</h6>
                <h2>Book Your Reservation Today</h2>
                <p>
                  Mauris pharetra et ultrices neque ornare aenean euismod.
                  Bibendum neque egestas congue quisque egestas diam in. Risus
                  nullam eget felis eget nunc lobortis mattis aliquam faucibus.
                </p>
                <button>Reserve a Table</button>
              </div>
            </div>
          </div>
        </div>
        <div className="serach_location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988761643!2d-0.2664059157476487!3d51.52873980477459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1689879537603!5m2!1sen!2sin"
          height={450}
          style={{ width: '100%', border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </section>
    </>
  );
}

export default BookTable;
