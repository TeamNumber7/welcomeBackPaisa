/*Post is the page for an individual Post
  It will be a stateful Container component
  Post will render: Comment, ReplyThread, AddReply
  Post will contain GET/POST logic for creating a new Post, fetching a single Post,
  fetching all the replies to the post, and POSTing a new reply
  Post will contain handleSubmit logic for AddReply
  Post will save GET data in state and pass down post and replies down as props
*/

import React from 'react';

import HeaderBar from "../components/home-forum/HeaderBar.jsx";

export default class WholeThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
}

  render() {
    return (
      <div>
        <HeaderBar />

      </div>
    )
  }
}
