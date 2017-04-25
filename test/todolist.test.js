import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';

import {TodoList} from '../src/todolist';

chai.use(chaiEnzyme());

describe('TodoList', function () {
    it('should render div with 1', () => {
        const wrapper = shallow(<TodoList/>);
        expect(wrapper).to.have.descendants('div');
        expect(wrapper.find('div')).to.have.length(1);
        expect(wrapper.find('div')).to.have.text(1);
    });
});