import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";


class PicName extends Component {

  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      {console.log(resp.data)}

      this.setState({
        albums: resp.data
      })
    })
  }



  render() {
    return (
      <div id="imagepage">

        <div id="image-header">
          <h1 id="imagename">Image Name</h1>
        </div>

        <div id="render3">

          <button id="go-left" className="direction-buttons">&#8678;</button>
          {this.state.albums.map(albumn => (

            <img id="large" src={albumn.gallery.pic1} />

          ))}

          <button id="go-right" className="direction-buttons">&#8680;</button>
        </div>

      </div>
    )
  }
}




export default PicName;
