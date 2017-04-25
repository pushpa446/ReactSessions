import React from 'react';
import {shallow} from 'enzyme';
import {Todo} from '../src/todo';
import chai,{expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

describe('Todo',() => {
   it('should render children', () => {
       const wrapper = shallow(<Todo completed={false} text="hello"/>);
       expect(wrapper).to.have.descendants('div');
       expect(wrapper).to.have.text("hello");
   });

    it('should not render if completed is true', () => {
        let wrapper = shallow(<Todo completed="{true}" text="hi"/>);
        expect(wrapper).to.not.have.text('hi');
    });
});