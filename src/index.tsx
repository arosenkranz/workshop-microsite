import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: process.env.APPLICATION_ID || '',
  clientToken: process.env.CLIENT_TOKEN || '',
  site: 'datadoghq.com',
  service: 'storedog-microsite',
  version: '1.0.0',
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
