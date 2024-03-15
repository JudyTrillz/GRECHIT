import React from "react";
import "./SpecialMenu.css";

import { images, data } from "../../constants";

import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <main className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Fits Your Palate' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu__wine flex__center'>
          <p className='app__specialMenu-menu__heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu__items'>
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu__img'>
          <img src={images.menu} alt='Menu banner' />
        </div>

        <div className='app__specialMenu-menu__cocktails flex__center'>
          <p className='app__specialMenu-menu__heading'>Cocktails</p>
          <div className='app__specialMenu-menu__items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='' style={{ marginTop: "15px" }}>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
    </main>
  );
};

export default SpecialMenu;
