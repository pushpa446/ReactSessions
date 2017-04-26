import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';

import {TodoList} from '../src/todolist';

chai.use(chaiEnzyme());

describe('TodoList', function () {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoList/>)
    });

    it('should render 2 default todos', () => {
        expect(wrapper).to.have.exactly(2).descendants('Todo');
    });

    it('should render 1 todo with text Todo 1 and completed false', () => {
        const firstTodo = wrapper.find('Todo').at(0);
        expect(firstTodo).to.have.prop("text",'Todo 1');
        expect(firstTodo).to.have.prop("completed", false);
    });

    it('should render 2 todo with text Todo 2 and completed false', () => {
        const firstTodo = wrapper.find('Todo').at(1);
        expect(firstTodo).to.have.prop("text",'Todo 2');
        expect(firstTodo).to.have.prop("completed", false);
    });

    it('should render todo with completed as toggled when onToggleCompleted is called', () => {
        wrapper.find('Todo').first().simulate('toggleCompleted');
        expect(wrapper.find('Todo').at(0)).to.have.prop('completed', true);
    });
});