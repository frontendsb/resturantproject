import React from 'react'

function Place() {
  return (
    <>
    <section id='place'>
      <div className='container'>
        <h2>Visitor's Choice</h2>
        <div className='row pt-5'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'>
          <div className='place_wrap'>
                    <div className='place_img'>
                        <img className='img-fluid' src="/" alt='pic'/>
                    </div>
                    <div className='place_cnt'>
                        <h4>Prashad, England</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'></div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3'></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Place