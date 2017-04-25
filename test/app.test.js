import chai,{expect} from 'chai';
import {shallow} from 'enzyme';
import {App} from '../src/app';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('App', function () {
    it('should render h1 with todos', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).to.have.descendants('div');
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h1')).to.have.text("ToDos");
        expect(wrapper).to.have.descendants('TodoList');
    });
});