import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li
      className="list-group-item"
      onClick={() => onVideoSelect(video)}
      onKeyPress={() => onVideoSelect(video)}
      role="presentation"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt={video.snippet.title} src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.shape.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
