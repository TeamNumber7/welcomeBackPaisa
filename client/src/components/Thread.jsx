import React from 'react';

class Thread extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
       {this.props.thread.comment} <button>Reply</button>
      </div>
    }
}

export default Thread;
