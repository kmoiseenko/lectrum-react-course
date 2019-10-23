import React from 'react';

// Components
import { News } from '../Components/News';

// Styles
import './styles.scss';

export const Home = () => {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <News />
        </div>
      </div>
    </>
  );
};