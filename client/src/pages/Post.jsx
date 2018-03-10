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

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      replies: []
    }
    this.getReply = this.getReply.bind(this)
    this.addReply = this.addReply.bind(this)
  }

  componentDidMount() {
    this.getReply(this.props.match.params.id);
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

  addReply(reply){
    $.ajax({
      method:'POST',
      url:'/reply',
      contentType: 'application/json',
      data:JSON.stringify({
        reply:reply
      })
    }).done(() => {
      this.getReply()
    })
  }

  render() {
    return (
      <div>
        <Comment comment={this.state.comment} />
        <ReplyThread replies={this.state.replies} />
      </div>
      )
    }
}
