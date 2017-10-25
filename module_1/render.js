import React from 'react';
import ReactDOMServer from 'react-dom/server'
import BlogPage from './componentns/containers/BlogPage'


const res = ReactDOMServer.renderToString(
  React.createElement(BlogPage)
);

export default res;
