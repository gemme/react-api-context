import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import {FlashMessageProvider} from './hooks/useFlashMessage/index';
import TestComponent from './TestComponent';

import {compose} from 'lodash/fp';

const App = (props) => {
    const [name, useName] = useState('gemme');
    return (  
      <TestComponent name={name}/>
    );
}


render(
    <FlashMessageProvider>
      <App />
  </FlashMessageProvider>
  , document.getElementById('root'));
