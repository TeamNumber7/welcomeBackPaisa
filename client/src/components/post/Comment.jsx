/*Comment will be a stateless presentational component
  It will show the original Post text, username
*/
import React from 'react';

//Logic for GET/POST will be moved up to Post.jsx
const Comment = (props) => (
  <div id="Background-image-post" className="post">
    <center>
      <div className="post-link">
        {props.post.post_subject}
      </div>
      <div className="comment-text">
        {props.post.post_text}
      </div>
    </center>
  </div>
)

export default Comment;
