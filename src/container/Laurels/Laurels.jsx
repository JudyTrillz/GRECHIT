import React from "react";
import "./Laurels.css";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const Laurels = () => {
  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className='app__laurels-awards__cards'>
      <img src={imgUrl} alt='Award ' />

      <div className='app__laurels-awards__cards-content'>
        <p className='p__cormorant' style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <main
      className='app__bg app__wrapper section__padding laurelWatermark'
      id='awards'>
      <div className='laurelWatermark__img'>
        <img src={images.logo} alt='Water Mark' />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & Recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels__awards'>
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='Laurels' />
      </div>
    </main>
  );
};
export default Laurels;
