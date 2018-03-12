/*Post is the page for an individual Post
  It will be a stateful Container component
  Post will render: Comment, ReplyThread, AddReply
  Post will contain GET/POST logic for creating a new Post, fetching a single Post,
  fetching all the replies to the post, and POSTing a new reply
  Post will contain handleSubmit logic for AddReply
  Post will save GET data in state and pass down post and replies down as props
*/
import React from 'react';

import Comment from '../components/post/Comment.jsx';
import ReplyThread from '../components/post/ReplyThread.jsx';
import AddReply from '../components/post/AddReply.jsx';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.match.params.id,
      comment: [],
      replies: []
    }
    this.getReply = this.getReply.bind(this)
    this.insertReply = this.insertReply.bind(this)
  }

  componentDidMount() {
    this.getReply(this.state.postId);
  }

  getReply(postId) {
    $.ajax({
      url: `/post/${postId}`,
      method:'GET',
      success: (data) => {
        this.setState({
          comment: data[0],
          replies: data[1]
        })
      },
      error:(xhr,err) => {
        console.log('err',err)
      }
    })
  }

  insertReply(reply){
    $.ajax({
      method: 'POST',
      url: `/post/${this.state.postId}`,
      contentType: 'application/json',
      data: JSON.stringify({
        reply
      })
    }).done(() => {
      this.getReply(this.state.postId)
    })
  }

  render() {
    let currentComment = this.state.comment.map(post => <Comment
      post={post} key={post.id} id='Background-image-post' /> )

    return (
      <div id='Background-image-post'>
        { currentComment }
        <ReplyThread replies={this.state.replies} id='Background-image-post' />
        <AddReply insertReply={this.insertReply} id='Background-image-post' />
      </div>
      )
    }
}
