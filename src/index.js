import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Foobar from './components/foobar';
import thunkMiddleware from 'redux-thunk';

const container = document.getElementById('tfs4jira__foobar');
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
