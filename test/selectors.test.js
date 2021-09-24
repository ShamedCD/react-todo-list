import { expect } from 'chai';
import { getCompletedTodos } from '../src/todos/selectors';

describe('Todos selectors', () => {
    it('Returns completed todos', () => {
        const fakeTodos = [
            { text: 'Item 1', isCompleted: true },
            { text: 'Item 2 ', isCompleted: true },
            { text: 'Item 3', isCompleted: false }
        ];
        const expected = [
            { text: 'Item 1', isCompleted: true },
            { text: 'Item 2 ', isCompleted: true }
        ];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});