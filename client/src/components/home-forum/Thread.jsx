import React from 'react';

class Thread extends React.Component{
  constructor(props){
    super(props);
    }

  render(){
    return(
    <div>
      <div>
        <div>{`${this.props.thread.title}`}</div><br />
          <div>{`${this.props.thread.body}`}</div><br />
        <button>Reply</button>
      </div>
    </div>
    )
  }
}

export default Thread;
