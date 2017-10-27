import React from 'react';
import BlogList from '../ui/BlogList';

const list = [
  {
    src: "https://goo.gl/9CzY5E",
    text: "I'm a good guy"
  },
  {
    src: "https://goo.gl/J4q89x",
    text: "Flower!"
  },
  {
    src: "https://goo.gl/emZYMB",
    text: "Beeball"
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list};
  }

  render() {
    return React.createElement(BlogList, {list})
  }
}

export default BlogPage;
