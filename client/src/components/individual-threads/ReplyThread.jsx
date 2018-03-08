import React from 'react';

class ReplyThread extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return <div>
       {this.props.Replythread.reply}


      </div>


}
}
export default ReplyThread;
