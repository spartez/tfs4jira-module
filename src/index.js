import React from 'react';
import { render } from 'react-dom';

import Foobar from './foobar';

const container = document.getElementById('tfs4jira__foobar');
const data = JSON.parse(container.getAttribute('data-foobar'));

render(
    <Foobar data={ data } />,
    container
);
