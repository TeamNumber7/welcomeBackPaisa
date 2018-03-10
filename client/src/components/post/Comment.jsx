/*Comment will be a stateless presentational component
  It will show the original Post text, username
*/
import React from 'react';

//Logic for GET/POST will be moved up to Post.jsx
const Comment = (props) => (
  <center>
    <h3>
      {this.props.comment.post_subject}
    </h3>
    <h4>
      {this.props.comment.post_text}
    </h4>
  </center>
)

export default Comment;
