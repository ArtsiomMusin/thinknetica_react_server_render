import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';
import BlogItem from './BlogItem';


const BlogList = ({list}) =>(
  DOM.ul(
    null,
    _.map(
      list,
      (item, key) => (
        DOM.li(
          {key},
          React.createElement(BlogItem, {src: item.src, text: item.text})
        )
      )
    )
  )
);

export default BlogList;
