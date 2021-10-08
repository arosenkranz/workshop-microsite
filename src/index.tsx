import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: `${import.meta.env.REACT_APP_DD_APPLICATION_ID}`,
  clientToken: `${import.meta.env.REACT_APP_DD_CLIENT_TOKEN}`,
  site: 'datadoghq.com',
  service: 'storedog-microsite',
  version: '1.1',
  sampleRate: 100,
  trackInteractions: true,
  allowedTracingOrigins: [
    /https:\/\/.*\.environments.katacoda\.com/,
    'http://localhost:3001',
  ],
});

datadogRum.startSessionReplayRecording();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
