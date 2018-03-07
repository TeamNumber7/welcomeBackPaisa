import React from 'react';
import Thread from './Thread.jsx';


const ThreadList = (props) => (
  <div>
    {props.threads.map(thread => <Thread thread={thread} key={thread.id} /> )}
  </div>
);
export default ThreadList;
