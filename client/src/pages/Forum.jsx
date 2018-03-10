/* Forum page will be stateful container for all forum components
  Forum page will render: Posts, AddPost
  Forum page will contain logic for GET/POST'ing posts
  Forum page will store posts in state and pass down a list of posts as props to Posts
*/

import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

import Posts from "../components/forum/Posts.jsx";
import AddPost from "../components/forum/AddPost.jsx";
import TextBoxForum from '../components/forum/TextBox.jsx';

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

  getPost(){
    $.ajax({
      url:'/forum',
      method:"GET",
      success: (data) => {
        this.setState({
          posts: data
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
        <div>
          <Posts posts={this.state.posts} />
        </div>
          <center><AddPost /></center>
          <div>
            <TextBoxForum />
          </div>
      </div>
    );
  }
}
