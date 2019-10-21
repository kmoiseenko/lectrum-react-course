import React, { useState } from 'react';
import cx from 'classnames';
import { string, number } from 'prop-types';

// Styles
import './styles.scss';

export const Accordion = (props) => {
  const { question, answer } = props.source
  const [index] = useState(props.index);
  const [activeClassName, updateActiveClassName] = useState('');

  const customClassNames = cx({
    active: activeClassName,
    'app-accordion__head': 'app-accordion__head'
  });

  const handleClick = () => {
    updateActiveClassName(activeClassName === '' ? 'active' : '');
  }

  return (
      <div className="app-accordion">
        <div className={ customClassNames } onClick={ handleClick }>{ index + 1 }.{ question }</div>
        <div className="app-accordion__body">{ answer }</div>
      </div>
  );
};

Accordion.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
  index: number.isRequired
};