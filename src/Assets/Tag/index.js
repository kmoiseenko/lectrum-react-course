import React from 'react';

// Styles
import './styles.scss';

export const Tag = ({ source }) => {
  return (
    <button className="app-tag">{ source }</button>
  );
};