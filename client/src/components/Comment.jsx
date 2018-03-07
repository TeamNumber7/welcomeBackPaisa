import React from 'react';
import AddReplyThread from './AddReplyThread.jsx'
import ReplyList from './ReplyList.jsx'

class Comment extends React.Component{
  constructor(props){
    super(props);
  this.state={
    replyThread:[]
    }
  }

  getReply(){
    $.ajax({
      url:'/reply',
      method:'GET',
      success:(results)=>{
        this.setState({
        replyThread:results
        })
      },
      error:(xhr,err)=>{
        console.log('err',err)
      }
    })
  }

  addReply(reply){
    $.ajax({
      method:'POST',
      url:'/reply',
      contentType: 'application/json',
      data:JSON.stringify({
        replyThread:replyThread
      })
    }).done(()=>{
      this.getReply()
    })
  }

  render(){
    return(
      <div>
        <AddReplyThread />
        <ReplyList replyThread={this.state.replyThread}  />
      </div>
    )
  }
}

export default Comment;
