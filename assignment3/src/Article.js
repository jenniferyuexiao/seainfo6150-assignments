import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {

    Article.PropTypes ={
      title: PropTypes.string,
      date: PropTypes.string,
      author:PropTypes.string
    }

    return(
    <div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.date}</h3>
      <h3>{this.props.author}</h3>
      <text>{this.props.children}</text>
    </div>
    );

  }

};
export default Article;
