import React from "react";
import "./Chef.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <main className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='Chef banner' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='Quote banner' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae
          officia saepe optio soluta deleniti nulla repellendus ad nesciunt, dolores
          voluptatum doloremque, quo deserunt a?
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kelvin Luo</p>

        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='Signature' />
      </div>
    </div>
  </main>
);

export default Chef;
