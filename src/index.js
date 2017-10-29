import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WakeUp  from './components/wakeup'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WakeUp />, document.getElementById('root'));
registerServiceWorker();
