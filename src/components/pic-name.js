import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";


class PicName extends Component {

  state = {
    albums:{}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:3001/pictures/${id}`).then(resp => {
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


          <img id="large" src={this.state.albums.url}/>
          
        </div>

      </div>
    )
  }
}




export default PicName;
