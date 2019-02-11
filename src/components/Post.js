import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="rank">1</div>
        <div className="votes">
          <div className="arrow up" />
          <div className="score">207</div>
          <div className="arrow down" />
        </div>
        <a href="#" className="thumbnail self" />
        <div className="content">
          <div className="title-area">
            <span className="title">
              <Link to="/post/sample-slug">
                Are we supposed to like Miguel?
              </Link>
            </span>
            <span className="url">(self.subreddit)</span>
          </div>
          <div className="meta-area">
            Submitted 8 hours ago by tamal to r/cobra
          </div>
          <div className="link-area">10 comments share save hide report</div>
        </div>
      </div>
    );
  }
}
