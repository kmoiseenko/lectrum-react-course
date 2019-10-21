import React, { useState } from 'react';
// import cx from 'classnames';

// Components
import { Accordion } from '../Components/Accordion';

// Styles
import './styles.scss';

// Source
import source from './accordion-source.json';

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActiveClassName, setIsActiveClassName] = useState('');

  const handleClick = (index, className) => {
    setIsActiveClassName(className === '' ? 'active' : '');
    setActiveIndex(index);
  }

  const accordionsJSX = source.map((item, index) => {
    return (
      <Accordion
        key={ index }
        source={ item }
        index={ index }
        handleClick={ handleClick }
        isActiveClassName = { activeIndex === index && isActiveClassName ? isActiveClassName : '' }
      />
    );
  });

  return (
    <>
      <div className="app">
        <div className="app-container">
          <h1>Project brief</h1>
          <div className="app-accordion__list">
            { accordionsJSX }
          </div>
        </div>
      </div>
    </>
  );
};