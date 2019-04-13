import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";


class PicName extends Component {
  render() {
    return (
      <div id="imagepage">

        <div id="image-header">
          <h1 id="imagename">Image Name</h1>
        </div>

        <div id="render3">

          <button id="go-left" className="direction-buttons">&#8678;</button>
          <img src="https://place-hold.it/694/900"/>
          <button id="go-right" className="direction-buttons">&#8680;</button>
        </div>

      </div>
    )
  }
}




export default PicName;
