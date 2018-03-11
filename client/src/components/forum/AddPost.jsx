/*AddPost will be a stateless presentational component
  AddPost will be clickable and should redirect to Create New Post page
  But for right now, it should only be a button icon
*/

import React from 'react';
import TextField from 'material-ui/TextField';
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
    comment:''
  }
  this.updateComment = this.updateComment.bind(this);
  this.updateUserName = this.updateUserName.bind(this);
 }

 updateComment(e){
   this.setState({
     comment:e.target.value
   })
 }

 updateUserName(e){
   this.setState({
     userName:e.target.value
   })
 }

 render() {
    return (
      <div id='Background-image-post'>
        <div className="startT">
        <h2>ADD NEW POST</h2>
          <section className="forumTextBox-section">
              <TextField underlineStyle={style.underlineStyle} floatingLabelText="New Post" multiLine={true} />
          </section>
        </div>
      </div>
    );
  }
}
export default AddPost;
