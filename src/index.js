import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { name } from '../package.json';

// this needs to be imported before any other app components
import 'reset-css/reset.css';

import reducers from './reducers/reducers';
import Foobar from './components/foobar';

const container = document.getElementById(name);
const data = JSON.parse(container.getAttribute('data-initial'));

const store = createStore(
    reducers,
    data,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={ store }>
        <Foobar />
    </Provider>,
    container
);
