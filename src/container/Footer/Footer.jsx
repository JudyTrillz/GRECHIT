import React from "react";
import "./Footer.css";
import { images } from "../../constants";

import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links__contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>

          <p className='p__opensans'>
            120 Avenues End Off Hamilton Boulevard ALE17232.
          </p>
          <p className='p__opensans'>+234 123 456 789</p>
          <p className='p__opensans'>+122 123 456 789</p>
        </div>

        <div className='ap__footer-links__logo'>
          <img src={images.gericht} alt='Footer logo' />

          <p className='p__opensans'>
            The best way to find yourself, is to lose yourself to the service of
            others.
          </p>

          <img
            src={images.spoon}
            alt='Footer spoon'
            className='spoon__img'
            style={{ marginTop: 15 }}
          />

          <div className='app__footer-links__icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links__works'>
          <h1 className='app__footer-headtext'>Working Hours</h1>

          <p className='p__opensans'>Monday-Friday</p>
          <p className='p__opensans'>08:00 am - 12:00 pm</p>

          <p className='p__opensans'>Saturday-Sunday</p>
          <p className='p__opensans'>07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2024 GREEÌcht clone. Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
