import React from 'react';

// Components
import { Article } from '../Article';
import { useNews } from './useNews';

// Styles
import './styles.scss';

export const News = () => {
  const { posts, isLoading } = useNews();

  const loaderJSX = <h1>Loading news...</h1>;

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

  const manageLoaderOrPosts = () => {
     return isLoading ? loaderJSX : articlesJSX;
  }

  return (
    <div className="app-row">
        { manageLoaderOrPosts() }
    </div>
  );
};