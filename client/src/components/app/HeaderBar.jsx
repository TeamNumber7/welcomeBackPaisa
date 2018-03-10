import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const HeaderBar = () => (
  <Card>
    <CardHeader

    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={"Angel_de_la_Independencia.jpg"} style={{width: 50, height: 400}} alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Was good fool!
    </CardText>
  </Card>
);
export default HeaderBar;
