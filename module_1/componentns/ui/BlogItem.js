import React from 'react';
import DOM from 'react-dom-factories';
import Image from './Image'
import TextBox from './TextBox'

const BlogItem = ({src, text}) => (
  DOM.div(
    null,
    React.createElement(
      Image,
      {
        src: src,
        width: "50",
        height: "50",
        alt: ""
      }
    ),
    React.createElement(TextBox, {text: text})
  )
);

export default BlogItem;
