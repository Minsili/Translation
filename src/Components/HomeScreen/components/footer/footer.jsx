import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

import user_icon from '../../../Assets/person.png'

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer'>
            <div className="col1">
                <div className="row">
                    <h3>Resources</h3>
                </div>
                <div className="row">
                    <p>Help Center</p>
                </div>
                <div className="row">
                   <p>Support</p>
                </div>
                <ul>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="col2">
                <div className="row">
                    <h3>Company</h3>
                </div>
                <div className="row">
                    <p>Languages</p>
                </div>
                <div className="row">
                   <p>Translation</p>
                </div>
                <div className="row">
                   <p>About Us</p>
                </div>
                <div className="row">
                   <p>Privacy</p>
                </div>
            </div>
            <div className="col3">
                <div className="row1">
                   <div className="logo">
                      <img src={user_icon} alt="" />
                   </div>
                </div>
                <div className="row2">
                   <div className="link">
                      <i><FontAwesomeIcon icon={faGoogle} /></i>
                   </div>
                   <div className="link">
                      <i><FontAwesomeIcon icon={faSquareInstagram} /></i>
                   </div>
                   <div className="link">
                      <i><FontAwesomeIcon icon={faFacebook} /></i>
                   </div>
                </div>
            </div>
            <div className="col4">
                <div className="end">
                   <p>&copy; 2024, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
