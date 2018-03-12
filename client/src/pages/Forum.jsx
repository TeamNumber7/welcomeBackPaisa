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

export default class Forum extends React.Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
  }
  this.getPost = this.getPost.bind(this);
  this.insertPost = this.insertPost.bind(this);
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

  insertPost(subject, comment){
    $.ajax({
      method:'POST',
      url:'/forum',
      contentType: 'application/json',
      data:JSON.stringify({
        subject,
        comment
      })
    }).done(()=>{
      this.getPost()
    })
  }

  render() {
    return (
      <div class="row">
        <div class="col-12 col-md-8">
          <Posts posts={this.state.posts} />
        </div>
          <aside class="col-6 col-md-4">
            <AddPost insertPost={this.insertPost} />
          </aside>
      </div>
    );
  }
}
