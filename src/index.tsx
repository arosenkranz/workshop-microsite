import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'ba9fab45-073a-4505-855f-07c69ed291ac',
  clientToken: 'pub02ae579d9efe5231e286d1a2ec2b14cd',
  site: 'datadoghq.com',
  service: 'storedog-microsite',
  // Specify a version number to identify the deployed version of your application in Datadog
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
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
