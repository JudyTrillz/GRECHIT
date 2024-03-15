import React, { useRef } from "react";
import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === "left" ? (current.scrollLeft -= 300) : (current.scrollLeft += 300);
  };

  const Images = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <main className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />

        <h1 className='headtext__cormorant'>Photo Gallery</h1>

        <p className='p__opensans' style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at quam harum
          eveniet illo soluta cupiditate ullam consequuntur velit nulla.
        </p>

        <button type='button' className='custom__button'>
          View More
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images__container' ref={scrollRef}>
          {Images.map((Image, index) => (
            <div
              className='app__gallery-images__card flex__center'
              key={`gallery__image-${index + 1}`}>
              <img src={Image} alt='Gallery pic' />

              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>

        <div className='app__gallery-images__arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
