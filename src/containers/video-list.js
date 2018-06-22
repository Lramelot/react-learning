import React from 'react'
import { VideoListItem } from '../components/video-list-item';

export const VideoList = (props) => {
  const movies = props.movies;

  return (
    <ul>
      {
        movies.map(movie => <VideoListItem key={movie.id} movie={movie} callback={receiveCallback} />)
      }
    </ul>
  )

  function receiveCallback(movie) {
    props.callback(movie);
  }
}

export default VideoList