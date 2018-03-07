import React from 'react';
import ReplyThread from './ReplyThread.jsx'

const ReplyList = (props) => (
  <div>
    {props.replies.map((reply)=> <ReplyThread reply={ReplyThread} key={replies.id} />)}
  </div>
);

export default ReplyList;
