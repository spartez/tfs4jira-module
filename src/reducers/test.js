import test from 'ava';
import reducer from './';

test('CAPITALIZE_FOO should set foo', t => {
    const action = { type: 'CAPITALIZE_FOO', foo: 'spartez' };
    const prior = { foo: 'foo', bar: 'bar' };

    const posterior = reducer(prior, action);

    t.deepEqual(posterior, { foo: 'spartez', bar: 'bar' });
});

test('FETCH_BAR_SUCCESS should set bar', t => {
    const action = { type: 'FETCH_BAR_SUCCESS', bar: 'new bar' };
    const prior = { foo: 'foo', bar: 'bar' };

    const posterior = reducer(prior, action);

    t.deepEqual(posterior, { foo: 'foo', bar: 'new bar', barInProgress: false, error: false });
});

test('FETCH_BAR_IN_PROGRESS should set progress', t => {
    const action = { type: 'FETCH_BAR_IN_PROGRESS', barInProgress: true };
    const prior = { foo: 'foo', bar: 'bar' };

    const posterior = reducer(prior, action);

    t.deepEqual(posterior, { foo: 'foo', bar: 'bar', barInProgress: true, error: false });
});

test('FETCH_BAR_ERROR should set error', t => {
    const action = { type: 'FETCH_BAR_ERROR', error: true };
    const prior = { foo: 'foo', bar: 'bar' };

    const posterior = reducer(prior, action);

    t.deepEqual(posterior, { foo: 'foo', bar: 'bar', barInProgress: false, error: true });
});
