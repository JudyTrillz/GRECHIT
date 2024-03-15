import React from "react";
import "./Home.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Home = (title) => {
  return (
    <main className='app__home app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__home-h1'>The Key to Fine Dining.</h1>
        <p className='p__opensans' style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          aspernatur. Labore, aperiam voluptatem! Error ab sequi nisi nulla
          aspernatur facilis voluptas ut.
        </p>

        <button type='button' className='custom__button'>
          Explore Menu
        </button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='Home Banner' />
      </div>
    </main>
  );
};

export default Home;
