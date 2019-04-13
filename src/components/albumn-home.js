import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";




class AlbumnHome extends Component {

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
      <div id="mainpage">

        <div id="albumns-header">
          <h1 id="myalbumns">My Albumns</h1>
        </div>

        <div id="albumns-render">
          {this.state.albums.map(album =>(
            <div id={album.id} className="albums">
              <img src={album.img} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>


      </div>

    )
  }
}

export default AlbumnHome
