import React from 'react';
import ReplyThread from './ReplyThread.jsx'

const ReplyList = (props) => (
  <div>
    {props.replyThread.map((reply)=> <ReplyThread reply={ReplyThread} key={ReplyThread.id} />)}
  </div>
);

export default ReplyList;
