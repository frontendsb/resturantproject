import React from 'react'
import { Link } from 'react-router-dom'
import As from '../images/app_store.png';
import Gs from '../images/g_store.png';

function Footer() {
  return (
   <>
   <footer id='footer'>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12 col-12'>
          <div className='ft_cnt'>
            <div>
              <Link to='/'><img className='img-fluid' src='/' alt='logo'/></Link>
            </div>
            <div className='social'>
              <h3>Follow Our Activity</h3>
              <a href='#' className='m_link'><i className="fa-brands fa-facebook-f"></i></a>
              <a href='#' className='m_link'><i className="fa-brands fa-instagram"></i></a>
              <a href='#' className='m_link'><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className='cnt'>
              <h3>Contact Us</h3>
              <a href='tel:+1 (800) 234-65-78' className='c_link'>+1 (800) 234-65-78</a>
              <span className='divider'>|</span>
              <a href='mailto:abc@example.com' className='c_link'>abc@example.com</a>
              <p>Riverside Building, County Hall, London SE1 7PB, UK</p>
            </div>
            <div className='dwnld'>
              <h3 style={{color: '#208d06', fontWeight: '700'}}>Download From</h3>
              <a href='#' className='s_link'><img className='img-fluid' src={As} alt='pic'/></a>
              <a href='#' className='s_link'><img className='img-fluid' src={Gs} alt='pic'/></a>
            </div>
            <div className='copyright'>
              <p>abc ©  All Rights Reserved 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer