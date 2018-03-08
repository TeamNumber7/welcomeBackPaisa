/* Forum page will be stateful container for all forum components
  Forum page will render: Posts, AddPost
  Forum page will contain logic for GET/POST'ing posts
  Forum page will store posts in state and pass down a list of posts as props to Posts
*/

import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

import Posts from "../components/forum/Posts.jsx"
import AddPost from "../components/forum/AddPost.jsx"

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [
        {title: 'help I need somebody',
          body: 'really need somebody'},
        {title: 'CDMX is great',
         body: 'Best city ever'}
      ]
    };
  }

  render() {
    return (
      <div>
        <Posts threads={this.state.threads} />
      </div>
    );
  }
}
