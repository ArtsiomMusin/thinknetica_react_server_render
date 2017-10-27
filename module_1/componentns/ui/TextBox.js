import React from 'react';
import DOM from 'react-dom-factories';

const TextBox = ({text}) => (
  DOM.span(null, text)
);

export default TextBox;
