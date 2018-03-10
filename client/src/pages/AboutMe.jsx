//Will be stateless component containing about us text
import React from 'react';

import Description from '../components/aboutUs/Description.jsx';
import DrawerUndockedExample from "../components/app/Menu.jsx";



export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <div>
      <div>
        <DrawerUndockedExample />
      </div>
      <div>
        <Description />
      </div>
</div>

    )
  }
}
