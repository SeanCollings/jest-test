import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }

  render() {
    return <div>{this.renderComments()}</div>;
  }
}

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps)(CommentList);
