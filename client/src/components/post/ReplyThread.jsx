/*ReplyThread will be a stateless presentational component
  It will containg mapping logic for taking props and rendering list without needing extra Reply component
  ReplyThread will contain formatting for each reply: text, username
*/

import React from 'react';
import Reply from './Reply.jsx';

class ReplyThread extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let allReplies = this.props.replies.map(reply => <Reply reply={reply} key={reply.id} />)

    return (
      <div>
       { allReplies }
      </div>
    )
  }
}

export default ReplyThread;
