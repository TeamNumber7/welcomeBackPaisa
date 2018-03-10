/*Dynamic MUI menu component that will contain links to Forum, About Me
  Will be mounted in App and be visible across all pages
*/
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};


    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleToggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleClose() {
    this.setState(prevState => ({
      open: false
    }));
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Menu"
          onClick={this.handleToggle}
          secondary={true}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Link to="/"><MenuItem onClick={this.handleClose}>Forum</MenuItem></Link>
        <Link to="/about"><MenuItem onClick={this.handleClose}>About Us</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}
