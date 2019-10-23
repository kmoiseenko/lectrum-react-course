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
  const [isActiveClassName, setIsActiveClassName] = useState(false);

  const handleClick = (index, className) => {
    setIsActiveClassName(className ? false : true);
    setActiveIndex(index);
  }

  const accordionsJSX = source.map((item, index) => {
    return (
      <Accordion
        key={ index }
        question={ item.question }
        answer={ item.answer }
        index={ index }
        handleClick={ handleClick }
        isActiveClassName = { activeIndex === index && isActiveClassName ? isActiveClassName : false }
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