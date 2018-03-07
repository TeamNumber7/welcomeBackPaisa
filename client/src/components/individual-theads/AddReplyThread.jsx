import React from 'react';

class AddReplyThread extends React.Component{
  constructor(props){
    super(props);

    this.state = {
     reply:''
   }
   this.addReply = this.addReply.bind(this);
   this.updateReply = this.updateReply.bind(this);


  }
  updatereply(e){
    this.setState({
      comment:e.target.value
    })
  }


  insertReply(){
    this.props.addReply(this.state.reply)
    this.setState({
      reply:''
    })
  }

  render(){
    return (<div>

        <textarea onChange={this.updateReply} value={this.state.reply}>


        </textarea>
        <div>

      <button onClick={this.insertReply}>Add reply </button>
        </div>
        </div>

    )
  }

  }

  export default AddReplyThread;
