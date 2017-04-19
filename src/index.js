import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Foobar from './foobar';

const container = document.getElementById('tfs4jira__foobar');
const data = JSON.parse(container.getAttribute('data-initial'));
const store = createStore(reducers, data);

render(
    <Provider store={ store }>
        <Foobar />
    </Provider>,
    container
);
