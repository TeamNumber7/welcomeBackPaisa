/*App.jsx is the supreme container for all the individual pages
  App will render:
    HeaderBar & Menu, which will be shared across all pages
  Routes rendered inside App will be:
    Forum ("/")
    Post ("/post/:id")
    About Me ("/about")
*/
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';

//SubComponents that will be rendered
import Forum from './pages/Forum.jsx';
import Post from './pages/Post.jsx';
import AboutMe from './pages/AboutMe.jsx';

//All GET/POST logic will be moved to the corresponding page
//TODO Add Router Route
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      posts: [
        { id: 54,
          title: 'help I need somebody',
          body: 'really need somebody'},
        { id: 55,
          title: 'CDMX is great',
         body: 'Best city ever'}
      ],
    currentPost: null
  }
  this.addPost = this.addPost.bind(this);
  this.getPost = this.getPost.bind(this);
  this.handlePost=this.handlePost.bind(this);
}

  componentDidMount(){
    this.getPost();
  }

  addPost(comment){
    $.ajax({
      method:'POST',
      url:'/paisa',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getPost()
    })
  }

  getPost(){
    $.ajax({
      url:'/paisa',
      method:"GET",
      success: (results) =>{
        this.setState({post:results})
      },
      error:(xhr,err) => {
        console.log("err", err);
      }
    })
  }

  handlePost(results){
  this.setState({
    currentPost:results
    })
  }

 render() {
    return (
      <div>
        <BrowserRouter>
          <MuiThemeProvider>
            <Forum />
            <Post posts={this.state.posts} currentPost={this.state.currentPost} handlePost={this.handlePost} />
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
