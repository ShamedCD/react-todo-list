import { expect } from 'chai';
import { todos } from '../src/todos/reducers';

describe('Todos reducers', () => {
    it('Adds a new item when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'Item 1', isCompleted: false };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        };
        const originalState = { isLoading: false, data: [] };
        const expectedState = { isLoading: false, data: [fakeTodo] };
        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expectedState);
    });
});