import React from 'react';
import Thread from './Thread.jsx'

const ThreadList = (props) => (
  <div>
  {props.thread.map((thread)=> <Thread thread={thread} key={thread.id} />)}
  </div>
);

export default ThreadList;
