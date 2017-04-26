import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {Todo} from '../src/todo';

describe('Todo', () => {
    let props;
    beforeEach(() => {
        props = {completed: false, text: "hello"}
    });
    it('should render children', () => {
        const wrapper = shallow(<Todo {...props}/>);
        expect(wrapper).to.have.descendants('span');
        expect(wrapper).to.include.text("hello");
    });

    it('should render toggle completed button', () => {
        let wrapper = shallow(<Todo {...props}/>);
        expect(wrapper).to.have.descendants('button');
        expect(wrapper).to.include.text("✔");
    });
    it('should not render if completed is true', () => {
        let props = {completed: true, text: "hello"};
        let wrapper = shallow(<Todo {...props} />);
        expect(wrapper).to.have.descendants('del');
        expect(wrapper.find('del')).to.include.text('hello');
    });

    it('should call onTogglecompleted when button is clicked', ()=> {
        let props = {text: 'todo1', completed: false};
        props.onToggleCompleted = sinon.spy();
        let wrapper = shallow(<Todo {...props}/>);
        const preventDefaultSpy = sinon.spy();
        wrapper.find('button').simulate('click', {preventDefault: preventDefaultSpy});
        expect(preventDefaultSpy).to.have.called;
        expect(props.onToggleCompleted).to.have.called;
    });
});