import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// Pull the YouTube API key from .env
const { API_KEY } = process.env;

ReactDOM.render(<App apiKey={API_KEY} />, document.getElementById('app'));
