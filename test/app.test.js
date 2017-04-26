import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import {App} from '../src/app';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('App', function () {
    it('should render h1 with todos', () => {
        let state = {todos: 1};
        const wrapper = shallow(<App/>, {
            context: {
                store: {
                    getState: () => {
                        return state;
                    }
                }
            }
        });
        expect(wrapper).to.have.descendants('div');
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h1')).to.have.text("ToDos");
        expect(wrapper).to.have.descendants('TodoList');
        expect(wrapper.find('TodoList')).to.have.prop('todos').deep.equal(state.todos);
    });

    it('should dispatch TOGGLE_COMPLETED and index when TodoList onToggleCompletedTodo is called', () => {
        let state = {todos: []};
        const dispatchSpy = sinon.spy();
        const context = {
            context: {
                store: {
                    getState: () => {
                        return state;
                    },
                    dispatch: dispatchSpy
                }
            }
        };
        const wrapper = shallow(<App/>, context);
        wrapper.find('TodoList').simulate('toggleCompletedTodo',0);
        expect(dispatchSpy).to.have.been.calledWith({type: 'TOGGLE_COMPLETED', index: 0});
    });
});