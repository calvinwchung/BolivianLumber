import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import '../components/Parallax.css';

const ParallaxScroll = ({picture, name, nav}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax className='paraImage' bgImage={ picture } strength={ 500 }>
        <div style={{ height: 700 }}>
          <div className='paraText'>
          <Link className='paraLink' to={nav}>{name}</Link>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
    </div>
  )
}

export default ParallaxScroll;