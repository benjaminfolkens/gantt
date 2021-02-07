import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Perfume from 'perfume.js';
const perfume = new Perfume({
  analyticsTracker: (options) => {
    const { metricName, data, eventProperties, navigatorInformation, vitalsScore } = options;
    switch (metricName) {
      case 'navigationTiming':
        if (data && data.timeToFirstByte) {
          myAnalyticsTool.track('navigationTiming', data);
        }
        break;
      case 'networkInformation':
        if (data && data.effectiveType) {
          myAnalyticsTool.track('networkInformation', data);
        }
        break;
      case 'storageEstimate':
        myAnalyticsTool.track('storageEstimate', data);
        break;
      case 'fp':
        myAnalyticsTool.track('firstPaint', { duration: data });
        break;
      case 'fcp':
        myAnalyticsTool.track('firstContentfulPaint', { duration: data });
        break;
      case 'fid':
        myAnalyticsTool.track('firstInputDelay', { duration: data });
        break;
      case 'lcp':
        myAnalyticsTool.track('largestContentfulPaint', { duration: data });
        break;
      case 'lcpFinal':
        myAnalyticsTool.track('largestContentfulPaintFinal', {
          duration: data,
        });
        break;
      case 'cls':
        myAnalyticsTool.track('cumulativeLayoutShift', { value: data });
        break;
      case 'clsFinal':
        myAnalyticsTool.track('cumulativeLayoutShiftFinal', { value: data });
        break;
      case 'tbt':
        myAnalyticsTool.track('totalBlockingTime', { duration: data });
        break;
      case 'tbt10S':
        myAnalyticsTool.track('totalBlockingTime10S', { duration: data });
        break;
      case 'elPageTitle':
        myAnalyticsTool.track('elementTimingPageTitle', { duration: data });
        break;
      default:
        myAnalyticsTool.track(metricName, { duration: data });
        break;
    }
  },
});
import App from './App.js';

import store from './store/index';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./App', renderApp);
// }
