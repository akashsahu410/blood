import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import store from './reduce.js'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
