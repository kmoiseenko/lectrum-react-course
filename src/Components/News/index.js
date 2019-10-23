import React from 'react';

// Components
import { Article } from '../Article';

// Styles
import './styles.scss';

export const News = ({ source }) => {
  const articlesJSX = source.map((article, index) => {
    return (
      <div className="app-col-4" key={ index }>
        <Article 
          title={ article.title }
          description={ article.description }
          published={ article.published }
          likes={ article.likes }
          comments={ article.comments }
          image={ article.image }
          tags={ article.tags }
        />
      </div>
    );
  });

  return (
    <div className="app-row">
      { articlesJSX }
    </div>
  );
};