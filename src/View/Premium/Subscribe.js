import React from 'react'

function Subscribe() {
  return (
    <>
    <section id='subscribe'>
        <div className='container'>
            <h2>Subscribe to Our Premium Features</h2>
            <div className='row pt-5'>
                <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
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
                        <button className='bdgt'>$10</button>
                        <button className='sub'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-12'></div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-12'></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Subscribe