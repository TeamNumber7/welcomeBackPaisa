import React from 'react';
import {Link} from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'Mexico.jpg',
    title:<a href="https://www.pinterest.com.mx/sdusbiber/the-sky-is-the-limit-quotes/">The Sky is the limit!</a>,
  },
  {
    img: 'Zocalo-Night.jpg',
    title: <a href="https://www.marketplace.org/2018/02/22/tech/some-dreamers-returning-mexico-seek-better-opportunities">New Opportunities!</a>,
  },
  {
    img: 'Angel2.png',
    title:<a href="https://www.nytimes.com/2017/02/25/style/eduardo-garcia-restaurants-mexico-migrant-worker-convict-deportee-star-chef.html">Strive For Better!</a>,
  },
  {
    img: 'Bellas-Artes.jpg',
    title:<a href="https://foursquare.com/top-places/mexico-city/best-places-nightclubs"> Mexico is Chingon!</a>,
  },
  {
    img: 'Mexico-City-at-night.jpg',
    title:<a href="https://santorinidave.com/best-beaches-mexico"> Mexico Is Beautiful!</a>
  },

];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const HeaderBar = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={3.0}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<a href="http://holacode.com/"><IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton></a>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default HeaderBar;
