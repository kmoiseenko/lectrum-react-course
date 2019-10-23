import React from 'react';

// Components
import { News } from '../Components/News';

// Styles
import './styles.scss';

// Source
import source from './source.json';

export const Home = () => {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <News source={ source } />
        </div>
      </div>
    </>
  );
};