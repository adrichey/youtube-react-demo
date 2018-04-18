import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <div className="col-md-4 video-list">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
