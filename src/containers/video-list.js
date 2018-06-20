import React, { Component } from 'react'
import { VideoListItem } from '../components/video-list-item';

export class VideoList extends Component {
  constructor(props) {
      super(props);

      this.state = { 
          films: [
            'Un magnifique film',
            'Un deuxième magnifique film',
            'Encore un'
          ] 
      }
  }

  render() {
    return (
        <ul>
            {
              this.state.films.map(film => <VideoListItem name={film}></VideoListItem>)
            }
        </ul>
    )
  }
}

export default VideoList
