import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import Forest1 from '../app/assets/forest1.jpeg';
import Forest2 from '../app/assets/forest2.jpeg';
import Forest3 from '../app/assets/forest3.jpeg';

const ParallaxScroll = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax className='paraImage' bgImage={ Forest1 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/about'>BOLIVIA</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax className='paraImage' bgImage={ Forest2 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/inventory'>SHOP</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax className='paraImage' bgImage={ Forest3 } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to='/contact'>CONTACT US</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

export default ParallaxScroll;