import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import AlbumnHome from "./albumn-home";
import AlbumnName from "./albumn-name";
import PicName from "./pic-name";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AlbumnHome}/>
          <Route path="/albumn/:id" component={AlbumnName}/>
          <Route path="/img/:id" component={PicName}/>
        </div>
      </Router>
    )
  }
}

export default App;
