import React from 'react';

// Components
import { Tag } from '../../Assets/Tag';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

// Styles
import './styles.scss';
import '../../Assets/Common/control-counter-styles.scss';

export const Article = () => {
  return (
      <div className="app-article">
        <div className="app-article__img"></div>
        <div className="app-article__container">
          <div className="app-article__tag-container">
            <Tag />
            <Tag />
          </div>
          <h4 className="app-article__title">American writer of bad cowboy stories arrived in</h4>
          <p className="app-article__desc">Volunteering to help people in need combined with travelling to faraway places is a new trend</p>
        </div>
        <div className="app-article__footer">
          <div className="app-article__container">
            <div className="app-article__date-and-social">
              <div className="app-article__date">15.07.2017</div>
              <div className="app-article__social">
                <CommentsCounter />
                <LikesCounter />
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};