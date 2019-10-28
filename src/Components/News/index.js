import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Article } from '../Article';
import { useNews } from './useNews';

// Navigation
import { history } from './../../navigation/history';
import { book } from './../../navigation/book';

// Styles
import './styles.scss';

export const News = () => {
  const { posts, isLoading } = useNews();
  const { id } = useParams();
  
  const loaderJSX = <h1>Loading data...</h1>;

  const getArticleJSX = (source) => {
    return (
      <div className="app-col-4" key={ source.objectId }>
        <Article { ...source } />
      </div>
    );
  }

  const findPostById = () => {
    const postById = posts.find(({ objectId }) => objectId === id);

    return postById ? getArticleJSX(postById) : history.push(book.page404);
  }

  const collectAllPosts = () => {
    const allPostsJSX = posts.map((item) => getArticleJSX(item));

    return allPostsJSX;
  }

  const checkForId = () => {
    return id ? findPostById() : collectAllPosts();
  }

  const manageLoaderOrPosts = () => {
     return isLoading ? loaderJSX : articlesJSX;
  }

  return (
    <div className="app-row">
        { manageLoaderOrContent() }
    </div>
  );
};