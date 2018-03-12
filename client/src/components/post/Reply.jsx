import React from 'react';

const Reply = (props) => (
  <div className='post-reply'>
    <center>
      {props.reply.reply_text}
    </center>
  </div>
)

export default Reply;
