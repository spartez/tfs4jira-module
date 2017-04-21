import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import Foobar from './components/foobar';
import thunkMiddleware from 'redux-thunk';
import { name } from '../package.json';

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
