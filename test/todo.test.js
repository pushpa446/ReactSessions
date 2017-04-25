import chai,{expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import {Todo} from '../src/todo';

describe('Todo',() => {
   it('should render children', () => {
       const wrapper = shallow(<Todo completed={false} text="hello"/>);
       expect(wrapper).to.have.descendants('div');
       expect(wrapper).to.include.text("hello");
   });

    it('should not render if completed is true', () => {
        let wrapper = shallow(<Todo completed={true} text="hi"/>);
        expect(wrapper).to.have.descendants('del');
        expect(wrapper.find('del')).to.include.text('hi');
    });

    it('should render toggle completed butto', () => {
       let wrapper = shallow(<Todo completed={false} text="hi"/>);
       expect(wrapper).to.have.descendants('button');
        expect(wrapper).to.include.text("✔");
    });
});