/*ReplyThread will be a stateless presentational component
  It will containg mapping logic for taking props and rendering list without needing extra Reply component
  ReplyThread will contain formatting for each reply: text, username
*/

import React from 'react';

class ReplyThread extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
       {this.props.Replythread.reply}
      </div>
    )
  }
}

export default ReplyThread;
