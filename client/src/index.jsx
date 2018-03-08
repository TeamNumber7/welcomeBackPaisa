import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddThread from './components/home-forum/AddThread.jsx';
import ThreadList from './components/home-forum/ThreadList.jsx';
import Comment from './components/individual-threads/Comment.jsx';
import AddReplyThread from './components/individual-threads/AddReplyThread.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thread: [],
    currentThread:null
  }


  this.addThread = this.addThread.bind(this);
  this.getThread = this.getThread.bind(this);
  this.handleThread = this.handleThread.bind(this);

}

  componentWillMount(){
    console.log('Testing ComponentWillMount');
  }


  addThread(comment){
    $.ajax({
      method:'POST',
      url:'/paisa',
      contentType: 'application/json',
      data:JSON.stringify({
      comment: comment
      })
    }).done(()=>{
      this.getThread()
    });
  }

  getThread() {
    $.ajax({
      type: "GET",
      url: '/paisa',
      success: function(results) {
        this.setState({
          thread: results
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log("err", err)
      }.bind(this)
    });
  }

  handleThread(results){

{console.log(thread)}
  this.setState({currentThread: results})

  }
 componentDidMount(){
    this.getThread();


  }
 render() {
    return (
      <BrowserRouter>
        <div>
          <AddThread addThread={this.addThread} />
          <ThreadList  thread={this.state.thread} currentThread={this.state.currentThread}  handleThread={this.handleThread}/>
        </div>
      </BrowserRouter>
    )
  };

};
ReactDOM.render(<App />, document.getElementById('app'));
