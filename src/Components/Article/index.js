import React from 'react';

// Components
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

// Styles
import './styles.scss';
import '../../Assets/Common/control-counter-styles.scss';

export const Article = ({ source }) => {
  const { title, description, published, likes, comments, image, tags } = source;
  const tagsJSX = tags.map((item, index) => <Tag key={ index } source={ item } />);

  return (
      <div className="app-article">
        <div className="app-article__img" style={{ backgroundImage: `url(${image})` }}></div>

        <div className="app-article__container">
          <div className="app-article__tag-container">{ tagsJSX }</div>
          <h4 className="app-article__title">{ title }</h4>
          <p className="app-article__desc">{ description }</p>
        </div>

        <div className="app-article__footer">
          <div className="app-article__container">
            <div className="app-article__date-and-social">
              <div className="app-article__date">{ new Date(published).toLocaleDateString() }</div>

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