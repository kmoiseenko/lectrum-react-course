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

  const handleLogOutClick = () => {
    localStorage.setItem('isAuth', false);
    history.replace(book.login);
  }

  const getArticleJSX = (source) => {
    return (
      <div className="app-col-4" key={ source.objectId }>
        <Article { ...source } />
      </div>
    );
  }

  const findPostById = () => {
    const postById = posts.find(({ objectId }) => objectId === id);

    if (postById) {
      return (
        <>
          <button onClick={ () => handleLogOutClick() }>Log out</button>
          { getArticleJSX(postById) }
        </>
      );
    } else {
      history.push(book.page404);
    }
  }

  const collectAllPosts = () => {
    const allPostsJSX = posts.map((item) => getArticleJSX(item));

    return allPostsJSX;
  }

  const checkForId = () => {
    return id ? findPostById() : collectAllPosts();
  }

  const manageLoaderOrPosts = () => {
     return isLoading ? loaderJSX : checkForId();
  }

  return (
    <div className="app-row">
        { manageLoaderOrPosts() }
    </div>
  );
};