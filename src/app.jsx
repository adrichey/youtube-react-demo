import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import PropTypes from 'prop-types';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: props.apiKey,
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Jumbo Commander');
  }

  videoSearch(term) {
    YTSearch({
      term,
      key: this.state.apiKey,
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

App.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default App;
