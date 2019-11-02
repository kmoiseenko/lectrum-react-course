import React from 'react';
import { string } from 'prop-types';

// Styles
import './styles.scss';

export const Tag = ({ source }) => {
  return (
    <button className="app-tag">{ source }</button>
  );
};

Tag.propTypes = {
  source: string.isRequired
};