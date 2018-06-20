import React, { Component } from 'react';
import { SearchBar } from '../components/search-bar';
import { VideoList } from './video-list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <VideoList></VideoList>
      </div>
    );
  }
}

export default App;
