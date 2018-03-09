/* Forum page will be stateful container for all forum components
  Forum page will render: Posts, AddPost
  Forum page will contain logic for GET/POST'ing posts
  Forum page will store posts in state and pass down a list of posts as props to Posts
*/

import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

<<<<<<< d7c8ca3e916821047b89299674a47f0d1d3f45e5
import Posts from "../components/forum/Posts.jsx";
import AddPost from "../components/forum/AddPost.jsx";
//import TextBoxForum from '../components/forum/TextBox.jsx';
=======
import DrawerUndockedExample from "../components/app/Menu.jsx";
import HeaderBar from "../components/app/HeaderBar.jsx";
import Posts from "../components/forum/Posts.jsx"
import AddPost from "../components/forum/AddPost.jsx"
>>>>>>> rebase

export default class Forum extends React.Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
  }
  this.getPost = this.getPost.bind(this);
  this.addPost = this.addPost.bind(this);
}

  componentDidMount(){
    this.getPost();
  }

  componentDidMount(){
    this.addPost();
  }

  getPost(){
    $.ajax({
      url:'/forum',
      method:"GET",
      success: (results) => {
        this.setState({
          posts: results
        })
      },
      error:(xhr,err) => {
        console.log("err", err);
      }
    })
  }

  addPost(comment){
    $.ajax({
      method:'POST',
      url:'/forum',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getPost()
    })
  }

  render() {
    return (
      <div>
<<<<<<< d7c8ca3e916821047b89299674a47f0d1d3f45e5
        <div>
          <Posts posts={this.state.posts} />
        </div>
          <center>
            <AddPost />
          </center>
=======
        <HeaderBar/>
        <DrawerUndockedExample />
        <AddPost />
        <Posts posts={this.state.posts} />
>>>>>>> rebase
      </div>
    );
  }
}
