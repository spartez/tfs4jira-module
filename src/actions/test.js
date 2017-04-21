import test from 'ava';
import sinon from 'sinon';
import nock from 'nock';

import { fetchBar } from './';

test('should fetch bar', async t => {
    const spy = sinon.spy();
    nock('https://www.googleapis.com')
        .get('/books/v1/volumes?q=bar')
        .reply(200, { items: [{ volumeInfo: { title: 'spartez' } }] });

    await fetchBar()(spy);

    t.deepEqual(spy.getCall(1).args[0], {
        bar: 'spartez',
        type: 'FETCH_BAR_SUCCESS'
    });
});

test('should dispatch error', async t => {
    const spy = sinon.spy();
    nock('https://www.googleapis.com')
        .get('/books/v1/volumes?q=bar')
        .reply(400);

    await fetchBar()(spy);

    t.deepEqual(spy.getCall(1).args[0], {
        type: 'FETCH_BAR_ERROR'
    });
});

test('should dispatch progress', async t => {
    const spy = sinon.spy();
    nock('https://www.googleapis.com').get('/books/v1/volumes?q=bar');

    await fetchBar()(spy);

    t.deepEqual(spy.getCall(0).args[0], {
        type: 'FETCH_BAR_IN_PROGRESS'
    });
});
