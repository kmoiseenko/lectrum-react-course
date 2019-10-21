import React from 'react';

// Components
import { Accordion } from '../Components/Accordion';

// Styles
import './styles.scss';

// Source
import source from './accordion-source.json';

export const Home = () => {
  const accordionsJSX = source.map((item, index) => {
    return <Accordion key={ index } source={ item } index={ index } />
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