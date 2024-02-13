// SuccessPage.js

import React from 'react';

const SuccessPage = () => {
  return (
    <div className="container">
      <div className='row'> 
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='success-box'>
            <h4 className='text'>Your order was placed successfully!</h4>
      {/* You can add more details or links to other pages if needed */}
            </div>
          </div>
          <div className='col-md-2'></div>
      </div>
    </div>
  );
};

export default SuccessPage;
