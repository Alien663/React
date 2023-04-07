import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import rootSaga from './saga'
import App from './containers/App';
import configureStore, { history } from './libs/store'
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore()
store.runSaga(rootSaga)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history = {history}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
