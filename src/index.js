import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './container/app/app'


ReactDOM.render(

    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>

    , document.getElementById('root'));
registerServiceWorker();
