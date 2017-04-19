import React from 'react';
import { connect } from 'react-redux';
import { capitalize } from './actions';

function Foobar({ foo, dispatch }) {

    function change() {
        dispatch(capitalize(foo));
    }

    return (
        <section>
            <h1>{ foo }</h1>
            <button onClick={ change }>capitalize</button>
        </section>
    );
}

export default connect(props => props)(Foobar);
