import React from 'react';
import { string, number } from 'prop-types';
import urlPropType from 'url-prop-type';

// Components
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

// Styles
import './styles.scss';
import './../../themes/common/control-counter-styles.scss';

export const Article = (source) => {
  const { title, description, created, likes, comments, poster, tags } = source;
  const tagsJSX = tags.split(',').map((item, index) => {
    return <Tag key={ index } source={ item } />
  });

  return (
      <div className="app-article">
        <div className="app-article__img" style={{ backgroundImage: `url(${poster})` }}></div>

        <div className="app-article__container">
          <div className="app-article__tag-container">{ tagsJSX }</div>
          <h4 className="app-article__title">{ title }</h4>
          <p className="app-article__desc">{ description }</p>
        </div>

        <div className="app-article__footer">
          <div className="app-article__container">
            <div className="app-article__date-and-social">
              <div className="app-article__date">{ new Date(created).toLocaleDateString() }</div>

              <div className="app-article__social">
                <CommentsCounter counts= { comments } />
                <LikesCounter counts={ likes } />
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Article.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  created: number.isRequired,
  likes: number.isRequired,
  comments: number.isRequired,
  poster: urlPropType.isRequired,
  tags: string.isRequired
};