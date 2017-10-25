import React from 'react';
import DOM from 'react-dom-factories';

const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
);

export default Image;
