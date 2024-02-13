import React from 'react';
import { Link } from 'react-router-dom';
import SliderMain from './slider';
import Newsletter from './newsletter';
import Products from './products';

function Homepage() {
  return (
    <>

<SliderMain/>
    <div className='welcome-section'>
      <h1 className='text-center'>Welcome to our store!</h1>
      <p className='text-center'>Explore our products and find great deals.</p>
    </div>

<Products/>
<Newsletter/>
    </>
  );
}

export default Homepage;
