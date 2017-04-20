import React from 'react';
import { connect } from 'react-redux';
import { capitalizeFoo, fetchBar } from '../../actions/actions';
import { Loader } from '../loader/';
import style from './style.pcss';

export function Foobar({ foo, bar, barInProgress, error, dispatch }) {

    return (
        <section>

            <h2>foo: { foo }</h2>
            <button onClick={ () => dispatch(capitalizeFoo(foo)) }>
                capitalize foo
            </button>

            <h2>
                bar:
                { barInProgress
                    ? <Loader />
                    : bar
                }
            </h2>
            { error &&
                <div className={ style.error }>
                    fetching foo has failed!
                </div>
            }
            <button onClick={ () => dispatch(fetchBar()) }>
                get bar from server
            </button>

        </section>
    );
}

export default connect(props => props)(Foobar);
