import React from "react";
import "./AboutUs.css";

import { images } from "../../constants";

const AboutUs = () => {
  return (
    <main className='app__aboutUs app__bg flex__center section__padding' id='about'>
      <div className='app__aboutUs-overlay flex__center'>
        <img src={images.G} alt='G letter' />
      </div>

      <div className='app__aboutUs-content flex__center'>
        <div className='app__aboutUs-content__about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about spoon' className='spoon__img' />
          <p className='p__opensans'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro earum
            quibusdam consectetur nesciunt tenetur blanditiis ex autem?
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>

        <div className='app__aboutUs-content__knife flex__center'>
          <img src={images.knife} alt='About Knife' />
        </div>

        <div className='app__aboutUs-content__history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about spoon' className='spoon__img' />
          <p className='p__opensans'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro earum
            quibusdam consectetur nesciunt tenetur blanditiis ex autem?
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
