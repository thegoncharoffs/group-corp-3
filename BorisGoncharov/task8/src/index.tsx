import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from './components/Chat';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsProviderWrapper } from './providers/SettingsProvider';
import { store } from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SettingsProviderWrapper>
          <Chat />
        </SettingsProviderWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();