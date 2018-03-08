import React from 'react';
import ReplyThread from './ReplyThread.jsx';

const ReplyList = (props)=>
(

  <div>
  {props.replyThread.map((Replythread)=> <ReplyThread ReplyThread={ReplyThread}   key={ReplyThread.id} />)}

  </div>
);
export default ReplyList;
