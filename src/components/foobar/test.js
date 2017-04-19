import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import mockStore from 'redux-mock-store';

import Foobar from './';

test('should capitalize foo', t => {
    const store = mockStore()({ foo: 'bar' });
    const wrapper = mount(<Foobar store={ store } />);

    wrapper.find('button').simulate('click');
    // console.log(wrapper.find('h1').html());
    // expect(wrapper.find(Foo)).to.have.length(3);
    console.log(wrapper.find('h1').html());
    t.pass();
});
