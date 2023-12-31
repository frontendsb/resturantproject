import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Help from "../Component/Help";
import Logo from '../images/logo.png';

function Header() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".mainheader");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      <header id="header-section" className="mainheader is-sticky">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link to='/' className="navbar-brand">
              <img className='img-fluid' src={Logo} alt='logo'/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <i className="fa-solid fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to='/' className="nav-link">
                    Home 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/favourites' className="nav-link">
                  Favourites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/profile' className="nav-link">
                  Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/premium' className="nav-link">
                  Go premium
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                   <i className="fa-solid fa-gear"></i>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to='/' className="dropdown-item" onClick={()=>{setOpenModal(true)}}>
                    help and guide
                    </Link>
                    <div className="dropdown-divider" />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {openModal &&<Help closeModal={setOpenModal}/>}
    </>
  );
}

export default Header;
