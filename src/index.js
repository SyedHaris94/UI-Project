import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from "material-ui"
import Routes from './components/routes'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
        <Routes />
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
