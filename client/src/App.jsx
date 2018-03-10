/*App.jsx is the supreme container for all the individual pages
  App will render:
    HeaderBar & Menu, which will be shared across all pages
  Routes rendered inside App will be:
    Forum ("/forum")
    Post ("/post/:id")
    About Me ("/about")
*/

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../dist/scss/main.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';

//SubComponents that will be rendered
import HeaderBar from "./components/app/HeaderBar.jsx";
import Forum from './pages/Forum.jsx';
import Post from './pages/Post.jsx';
import AboutMe from './pages/AboutMe.jsx';

//All GET/POST logic will be moved to the corresponding page
//TODO Add Router Route

const App = () => (
       <BrowserRouter>
        <MuiThemeProvider>
          <main>
            <Switch>
              <Route exact path="/" component={Forum} />
                <Route path="/post/:id" component={Post} />
                  <Route path="/about" component={AboutMe} />
            </Switch>
          </main>
        </MuiThemeProvider>
      </BrowserRouter>
    )

ReactDOM.render(<App />, document.getElementById('app'));
