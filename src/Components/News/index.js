import React from 'react';

// Components
import { Article } from '../Article';

// Styles
import './styles.scss';

// Source
import source from './source.json';

export const News = () => {
  const item = source.shift();

  return (
    <div className="app-row">
      <div className="app-col-4">
        <Article 
          title={ item.title }
          description={ item.description }
          published={ item.published }
          likes={ item.likes }
          comments={ item.comments }
          image={ item.image }
          tags={ item.tags }
        />
      </div>
      <div className="app-col-4">
        <Article 
          title={ item.title }
          description={ item.description }
          published={ item.published }
          likes={ item.likes }
          comments={ item.comments }
          image={ item.image }
          tags={ item.tags }
        />
      </div>
      <div className="app-col-4">
        <Article 
          title={ item.title }
          description={ item.description }
          published={ item.published }
          likes={ item.likes }
          comments={ item.comments }
          image={ item.image }
          tags={ item.tags }
        />
      </div>
    </div>
  );
};