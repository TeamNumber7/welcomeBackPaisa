/*Comment will be a stateless presentational component
  It will show the original Post text, username
*/

import React from 'react';
import AddReply from './AddReply.jsx';
import ReplyList from './ReplyList.jsx';

//Logic for GET/POST will be moved up to Post.jsx

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reply:[]
    }
  }

  getReply(){
    $.ajax({
      url:'/reply',
      method:'GET',
      success:(results)=>{
        this.setState({
        reply:results
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
        reply:reply
      })
    }).done(()=>{
      this.getReply()
    })
  }

  render(){
    return(
      <div>
        <AddReply />
        <ReplyList reply={this.state.reply}  />
      </div>
    )
  }
}

export default Comment;
