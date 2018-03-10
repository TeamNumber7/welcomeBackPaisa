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
import DrawerUndockedExample from "./components/app/Menu.jsx";
import Forum from './pages/Forum.jsx';
import Post from './pages/Post.jsx';
import AboutMe from './pages/AboutMe.jsx';

//All GET/POST logic will be moved to the corresponding page
//TODO Add Router Route

const App = () => (
  <div>
    <BrowserRouter>
      <MuiThemeProvider>
      <DrawerUndockedExample />
        <main id="content" className="full-height inner">
          <Switch>
            <Route exact path="/" component={Forum} />
              <Route path="/post/:id" render={(props) => <Post {...props}/> } />
                <Route path="/about" component={AboutMe} />
          </Switch>
        </main>
      </MuiThemeProvider>
    </BrowserRouter>
  </div>
    )

ReactDOM.render(<App />, document.getElementById('app'));
