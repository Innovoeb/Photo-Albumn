import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import AlbumnName from "./albumn-name";




class AlbumnHome extends Component {

  state = {
    albums: []
  }


  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {


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
            <Link key={`albumn-home ${album.id}`} to={`/albumn/${album.id}`}><div id={album.id} className="albums">
              <img alt={album.name} src={album.img} />
              <p>{album.name}</p>
            </div>
            </Link>
          ))}
        </div>


      </div>

    )
  }
}

export default AlbumnHome
