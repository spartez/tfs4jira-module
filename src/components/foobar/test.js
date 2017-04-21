import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';

import { Foobar } from './';

test('should capitalize foo', t => {
    const props = { foo: 'spartez', dispatch: sinon.spy() };
    const wrapper = mount(<Foobar { ...props } />);

    wrapper.find('button').first().simulate('click');

    t.deepEqual(props.dispatch.firstCall.args[0], {
        foo: 'SPARTEZ',
        type: 'CAPITALIZE_FOO'
    });
});
