import React from 'react';
import SinglePost from './SinglePost.jsx';

/*Posts component will contain logic for rendering user posts as a list
*/
const Posts = (props) => (
  <div id='Background-image-post' className="post">
    {props.posts.map(post => <SinglePost post={post} key={post.id} /> )}
  </div>
);
export default Posts;
