/*Single Post will be a stateless presentational component
  it will be the template for displaying each post title, post's username
  This is also where we WOULD display the Upvotes/Likes, but we're not
  SinglePost will be clickable and be wrapped in a router Link to path: /post/:id
*/

import React from 'react';

class SinglePost extends React.Component{
  constructor(props){
    super(props);
    }

  render(){
    return(
      <div>
        <div>
          <div>{`${this.props.post.title}`}</div><br />
            <div>{`${this.props.post.body}`}</div><br />
          <button>Reply</button>
        </div>
      </div>
    )
  }
}

export default SinglePost;
