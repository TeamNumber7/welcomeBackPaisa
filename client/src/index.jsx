import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BrowserRouter from 'react-router-dom'

import AddThread from './components/AddThread.jsx';
import ThreadList from './components/ThreadList.jsx';
import Comment from './components/Comment.jsx'
import AddReplyThread from './components/AddReplyThread.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thread: [],
      currentThread: null
  }
  this.addThread = this.addThread.bind(this);
  this.getThread = this.getThread.bind(this);
  this.handleThread = this.handleThread.bind(this)
}

  addThread(comment){
    $.ajax({
      method:'POST',
      url:'/paisa',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getThread()
    })
  }

  getThread(){
    $.ajax({
      url:'/paisa',
      method:"GET",
      success: (results) =>{
        this.setState({thread:results})
      },
      error: (xhr,err) => {
        console.log("err", err);
      }
    })
  }

  handleThread(results){
    {console.log(thread)}
    this.setState({currentThread:results})
  }

  componentDidMount(){
    this.getThread();
  }

  render() {
    return (
      <div>
        <AddThread addThread={this.addThread} />
        <ThreadList thread={this.state.thread} currentThread={this.state.currentThread} handleThread={this.handleThread}   />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
