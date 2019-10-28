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
  const { id } = useParams();
  const { posts } = useNews();

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

    return postById ? getArticleJSX(postById) : history.push(book.unknown);
  }

  const collectAllPosts = () => {
    const allPostsJSX = posts.map((item) => getArticleJSX(item));

    return allPostsJSX;
  }

  const checkForId = () => {
    return id ? findPostById() : collectAllPosts();
  }

  const manageLoaderOrContent = () => {
     return posts.length ? checkForId() : loaderJSX;
  }

  return (
    <div className="app-row">
        { manageLoaderOrContent() }
    </div>
  );
};