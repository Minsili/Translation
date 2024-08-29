import React, { useState } from 'react';
import './about.css';

import nature from '../../../Assets/lina-nature.jpg'

const AboutUs = () => {
    return(
        <div className='about'>
          <div className="col1">
            <div className="title">
                <h2>About Us</h2>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Suscipit repellendus architecto harum fugit fuga eius inventore 
                    quae qui sed illum, aut est velit autem ut nisi possimus nesciunt doloribus culpa.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Suscipit repellendus architecto harum fugit fuga eius inventore 
                    quae qui sed illum, aut est velit autem ut nisi possimus nesciunt doloribus culpa.
                </p>
            </div>
          </div>

          <div className="col2">
           <div className="photo">
              <img src={nature} alt="" />
           </div>
          </div>
        </div>
    )
}

export default AboutUs;
