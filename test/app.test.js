import {expect} from 'chai';
import {shallow} from 'enzyme';
import {App} from '../src/app';
import React from 'react';

describe('App', function () {
    it('should render h1 with todos', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1').length).to.equal(1);
    });
});