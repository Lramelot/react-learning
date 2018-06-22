import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const VideoListItem = ({movie}) => {
  return (
    <li className="list-group-item">
      <div class="media">
        <div className="media-left">
          <img className="media-object img-rounded" height="100px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />                  
        </div>
        <div className="media-body">
          <h5>{movie.title}</h5>
        </div>
      </div>    
    </li>
  )
}

export default VideoListItem
