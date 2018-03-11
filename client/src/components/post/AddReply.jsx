/*AddReplay will be stateful component where new replies are written
*/
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class AddReply extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     reply: ''
   }
   this.addReply = this.addReply.bind(this);
   this.updateReply = this.updateReply.bind(this);
  }

  updateReply(event){
    this.setState({
      reply: event.target.value
    })
  }

  addReply(){
    this.props.insertReply(this.state.reply)
    this.setState({
      reply: ''
    })
  }

  render(){
    return (
      <div>
        <center>
        <section className="forumTextBox-section">
            <TextField onChange={this.updateReply} floatingLabelText="Add Reply" multiLine={true} value={this.state.reply}/>
        </section>
        <div>
          <RaisedButton onClick={this.addReply} label="Submit" style={style} type="submit" />
        </div>
        </center>
      </div>
    )
   }
  }

  export default AddReply;
