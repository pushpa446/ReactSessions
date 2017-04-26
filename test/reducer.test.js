import reducer from '../src/reducer';
import {expect} from 'chai';

describe('Reducer', () => {

    describe('INIT', () => {
        it('should return 2 todos when state is undefined', () => {
            const result = reducer(undefined, {});
            const expectedResult = {
                todos: [
                    {text: 'Todo 1', completed: false},
                    {text: 'Todo 2', completed: false}
                ]
            };
            expect(result).to.deep.equal(expectedResult);
        });
    });

    describe('TOGGLE_COMPLETED', () => {
        it('should toggle completed of the todo at ', () => {
           const oldState = {
               todos: [
                   {text: 'Todo 1', completed: false}
               ]
           };
           const result = reducer(oldState,{type: 'TOGGLE_COMPLETED', index: 0});
           expect(result.todos[0].completed).to.be.true;
        });
    });

});