import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";



import HeaderBar from "../components/home-forum/HeaderBar.jsx";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <HeaderBar />
            <div>

            </div>
            <div>

            </div>
    </div>
    );
  }
}
