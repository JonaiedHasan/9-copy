import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='d-flex align-items-center mt-5'>
            <div className='header-text'>
              <h4>One Step Closer To Your <span className='title-dream'>Dream Job</span></h4>
              <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className='btn-apply mt-3'>Get Started</button>
            </div>
            <div className='img-container'>
            <img src="https://i.ibb.co/VtmYLFf/P3-OLGJ1-copy-1.png"/>
              
            </div>
        </div>
    );
};

export default Header;