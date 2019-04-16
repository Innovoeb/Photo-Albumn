import React, { Component } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';


class AlbumnName extends Component {

  state = {
    albums: [],
    items: [],
    name: "",
    gallery: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      this.setState({
        // gallery: user.gallery,
        albums: resp.data,
        // name: user.name,

      })
    })

      // coming from albums home
      const id = this.props.match.params.id
    axios.get(`http://localhost:3001/albums/${id}?_embed=pictures`).then(resp => {
      this.setState({
        gallery: resp.data.pictures,
        name: resp.data.name
      })
    })
  }
  // every updated url
  componentWillReceiveProps(newProps){
    if (newProps.match.params.id !== this.props.match.params.id) {
      const newId = newProps.match.params.id
      axios.get(`http://localhost:3001/albums/${newId}?_embed=pictures`).then(resp => {
        this.setState({
          gallery: resp.data.pictures,
          name: resp.data.name
        })
      })
    }
   }








  render() {
    return (
      <div id="albumnspage">

        <div id="albumns-view-header">
          <h1 id="albumnname">{this.state.name}</h1>
        </div>

        <div className='center'>
        </div>

        <div id="sidebar">
        {this.state.albums.map(albumn =>(
          <Link to={`/albumn/${albumn.id}`}><p className="sidebar-links">{albumn.name}</p></Link>
        ))}
        </div>



        <div id="render-2">


          {this.state.gallery.map(albumn =>(
            <div>
              <Link to={`/img/${albumn.id}`}><img src={albumn.url} /></Link>
            </div>
          ))}

        </div>









      </div>
    )
  }
}



export default AlbumnName
