import React, { useState } from 'react';
import cx from 'classnames';
import { string, number } from 'prop-types';

// Styles
import './styles.scss';

export const Accordion = (props) => {
  const { question, answer } = props.source
  const [index] = useState(props.index);

  const customClassNames = cx({
    active: props.isActiveClassName,
    'app-accordion__head': 'app-accordion__head'
  });

  return (
      <div className="app-accordion">
        <div
          className={ customClassNames }
          onClick={ () => props.handleClick(index, props.isActiveClassName) }
        >
          { index + 1 }.&nbsp;{ question }
        </div>

        <div className="app-accordion__body">{ answer }</div>
      </div>
  );
};

Accordion.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
  index: number.isRequired
};