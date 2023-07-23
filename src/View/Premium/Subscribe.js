import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

function Subscribe() {
    AOS.init({
        duration: 1500,
      })
  return (
    <>
    <section id='subscribe' data-aos={"fade-up"}>
        <div className='container'>
            <h2>Subscribe to Our Premium Features</h2>
            <div className='row pt-5'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
                    <div className='box'>
                        <h3>Weekly</h3>
                        <hr></hr>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                        <hr></hr>
                        <div>
                        <button className='bdgt'>$10</button>
                        <button className='sub'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
                    <div className='box'>
                        <h3>Monthly</h3>
                        <hr></hr>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                        <hr></hr>
                        <div>
                        <button className='bdgt'>$15</button>
                        <button className='sub'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
                    <div className='box'>
                        <h3>Yearly</h3>
                        <hr></hr>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                        <hr></hr>
                        <div>
                        <button className='bdgt'>$20</button>
                        <button className='sub'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Subscribe