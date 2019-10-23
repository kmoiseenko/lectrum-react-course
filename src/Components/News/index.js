import React from 'react';

// Components
import { Article } from '../Article';
import { useNews } from './useNews';

// Styles
import './styles.scss';

export const News = () => {
  const { posts } = useNews();
  
  const articlesJSX = posts.map((article) => {
    return (
      <div className="app-col-4" key={ article.objectId }>
        <Article 
          title={ article.title }
          description={ article.description }
          created={ article.created }
          likes={ article.likes }
          comments={ article.comments }
          poster={ article.poster }
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