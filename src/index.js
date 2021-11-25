import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ColorProvider} from './hooks/color-hooks'


ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);

