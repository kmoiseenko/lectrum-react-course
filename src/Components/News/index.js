import React from 'react';

// Components
import { Article } from '../Article';

// Styles
import './styles.scss';

export const News = () => {
  return (
    <div className="app-row">
      <div className="app-col-4">
        <Article />
      </div>
      <div className="app-col-4">
        <Article />
      </div>
      <div className="app-col-4">
        <Article />
      </div>
    </div>
  );
};