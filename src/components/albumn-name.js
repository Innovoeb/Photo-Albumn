import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";

class AlbumnName extends Component {
  render() {
    return (
      <div id="albumnspage">

        <div id="albumns-view-header">
          <h1 id="albumnname">Albumn Name</h1>
        </div>
        <div className='center'>
        <div id="sidebar">
          <p className="sidebar-links">Albumn 1</p>
          <p className="sidebar-links">Albumn 2</p>
          <p className="sidebar-links">Albumn 3</p>
          <p className="sidebar-links">Albumn 4</p>
          <p className="sidebar-links">Albumn 5</p>
          <p className="sidebar-links">Albumn 6</p>
        </div>

        <div id="render-2">
          <div id="render2-1" className="albumns">
            <img src="https://placehold.it/300/300"/>
            <p>Albumn Name</p>
            </div>
            <div id="render2-2" className="albumns">
            <img src="https://placehold.it/300/300"/>
            <p>Albumn Name</p>
          </div>
          <div id="render2-3" className="albumns">
            <img src="https://placehold.it/300/300"/>
            <p>Albumn Name</p>
          </div>
        </div>
        </div>









      </div>
    )
  }
}



export default AlbumnName
