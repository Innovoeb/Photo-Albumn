import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';


class AlbumnName extends Component {

  state = {
    albums: [],
    name: "",
    gallery: "",
  }

  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      {console.log(resp.data)}

      // check my url for a parameter called id & put into a variable called id
      const id = this.props.match.params.id
      // go through the data and find a person that matches my variable named id
      const user = this.state.albums.find(albumn => albumn.id == id)
      this.setState({
        // gallery: user.gallery,
        albums: resp.data,
        // name: user.name,

      })


    })
  }









  render() {
    return (
      <div id="albumnspage">

        <div id="albumns-view-header">
          <h1 id="albumnname">Albumn Name</h1>
        </div>

        <div className='center'>
        </div>

        <div id="sidebar">
        {this.state.albums.map(albumn =>(
          <p className="sidebar-links">{albumn.name}</p>
        ))}
        </div>



        <div id="render-2">


          {this.state.albums.map(albumn =>(
            <div>
              <img src={albumn.gallery.pic1} />
            </div>
          ))}

        </div>









      </div>
    )
  }
}



export default AlbumnName
