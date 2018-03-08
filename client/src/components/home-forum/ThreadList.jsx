import React from 'react';
import Thread from './Thread.jsx';


const ThreadList = (props) => (props.thread.map((thread) =>

    <div>
      <Thread
        key={thread.id}
        id={thread.id} />
    </div>
  )
);
export default ThreadList;
