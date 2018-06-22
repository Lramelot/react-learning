import React, { Component } from 'react';
import { SearchBar } from '../components/search-bar';
import { VideoList } from './video-list';
import Axios from 'axios';
import { VideoDetail } from '../components/video-detail';
import { Video } from '../components/video';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=ab88c39bca38057ad2c0c8561c5b4b8f";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: [], selectedMovie: {}};
  }

  componentWillMount() {
    this.initMovies();    
  }

  initMovies() {
    Axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(res => {
      this.setState({
        moviesList: res.data.results.slice(1, 6),
        selectedMovie: res.data.results[0]
      }, () => this.applyVideoToSelectedMovie());
    });
  }

  applyVideoToSelectedMovie() {
    Axios.get(`${API_END_POINT}movie/${this.state.selectedMovie.id}?${API_KEY}&&append_to_response=videos&include_adult=false`).then(res => {
      const youtubeId = res.data.videos.results[0].key;
      const newSelectedMovieState = this.state.selectedMovie;
      newSelectedMovieState.youtubeId = youtubeId;

      this.setState({
        selectedMovie: newSelectedMovieState
      });
    })
  }

  receivedCallback(movie) {
    this.setState({
      selectedMovie: movie
    }, () => this.applyVideoToSelectedMovie());
  }

  render() {
    const renderVideoList = () => {
      if (this.state.moviesList.length > 4) {
        return <VideoList movies={this.state.moviesList} callback={this.receivedCallback.bind(this)} />
      }
    }

    return (
      <div>
        <SearchBar></SearchBar>

        <div className="row">
          <div className="col-md-8">
            <Video youtubeId={this.state.selectedMovie.youtubeId} />        
            <VideoDetail title={this.state.selectedMovie.title} description={this.state.selectedMovie.overview} />
          </div>

          <div className="col-md-4">
            { renderVideoList() }            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
