import React from "react";
import "./help.css";

function Help({ closeModal }) {
  return (
    <>
      <div id="help-desk">
        <div className="help_inner">
          <button className="close_btn"  onClick={() => {
              closeModal(false);
            }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h3>Help and Guide</h3>
          <div className="description">
          <p>
            <strong>1.</strong>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris auctor luctus vestibulum. Duis ornare a
            lacus a elementum. Quisque eget neque eros. Maecenas vitae mi sit
            amet velit volutpat tincidunt non vel lectus.
          </p>
          <p>
            <strong>2.</strong>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris auctor luctus vestibulum. Duis ornare a
            lacus a elementum. Quisque eget neque eros. Maecenas vitae mi sit
            amet velit volutpat tincidunt non vel lectus.
          </p>
          <p>
            <strong>3.</strong>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris auctor luctus vestibulum. Duis ornare a
            lacus a elementum. Quisque eget neque eros. Maecenas vitae mi sit
            amet velit volutpat tincidunt non vel lectus.
          </p>
          <p>
            <strong>4.</strong>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris auctor luctus vestibulum. Duis ornare a
            lacus a elementum. Quisque eget neque eros. Maecenas vitae mi sit
            amet velit volutpat tincidunt non vel lectus.
          </p>
          <p>
            <strong>5.</strong>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris auctor luctus vestibulum. Duis ornare a
            lacus a elementum. Quisque eget neque eros. Maecenas vitae mi sit
            amet velit volutpat tincidunt non vel lectus.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
