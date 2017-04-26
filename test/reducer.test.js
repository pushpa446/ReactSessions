import reducer from '../src/reducer';
import {expect} from 'chai';

describe('Reducer', () => {
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