/*AddPost will be a stateless presentational component
  AddPost will be clickable and should redirect to Create New Post page
  But for right now, it should only be a button icon
*/
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500, pink300, deepPurple400} from 'material-ui/styles/colors';

const style = {
  errorStyle: {
  color: orange500,
},
underlineStyle: {
  borderColor: deepPurple400,
},
floatingLabelStyle: {
  color: orange500,
},
floatingLabelFocusStyle: {
  color: blue500,
},
  margin: 12,
};

class AddPost extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     subject: '',
     comment: ''
  }
  this.updateSubject = this.updateSubject.bind(this);
  this.updateComment = this.updateComment.bind(this);
  this.addNewPost = this.addNewPost.bind(this);
 }

 updateSubject(event){
   this.setState({
     subject: event.target.value
   })
 }

 updateComment(event){
   this.setState({
     comment: event.target.value
   })
 }

  addNewPost(){
    this.props.insertPost(this.state.subject, this.state.comment);
    this.setState({
      subject: '',
      comment: ''
    })
  }

 render() {
    return (
      <div id='Background-image-post'>
        <div className="startT">
        <h2>START NEW POST</h2>
          <section className="forumTextBox-section">
              <TextField onChange={this.updateSubject}
                         floatingLabelText="Title"
                         multiLine={false}
                         value={this.state.subject}
                         underlineStyle={style.underlineStyle}
                         />
          </section>
          <section className="forumTextBox-section">
              <TextField onChange={this.updateComment}
                         floatingLabelText="Comment"
                         multiLine={true}
                         value={this.state.comment}
                         underlineStyle={style.underlineStyle}
                         />
          </section>
          <div>
            <RaisedButton onClick={this.addNewPost}
                          label="Submit"
                          secondary={true}
                          style={style} type="submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
